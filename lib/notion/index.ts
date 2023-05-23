import axios from 'axios'
import { ICategoriesResp } from './categories'
import { IProduct, IProjectsResp } from './products'
import { ITagsResp } from './tags'
import { Client } from '@notionhq/client'
// @ts-ignore
import { NotionAPI } from 'notion-client'

const TABLE_ID_PROJECTS = process.env.NOTION_TABLE_ID_PROJECTS
const TABLE_ID_PRODUCTS = process.env.NOTION_TABLE_ID_PRODUCTS
const TABLE_ID_CATEGORIES = process.env.NOTION_TABLE_ID_CATEGORIES
const TABLE_ID_TAGS = process.env.NOTION_TABLE_ID_TAGS
const TABLE_ID_BLOG = process.env.NOTION_TABLE_ID_BLOG
const TABLE_ID_CONTACTS = process.env.NOTION_TABLE_ID_CONTACTS

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

const notionX = new NotionAPI()

const NotionClient = {
  async getProjects() {},
  async getProducts({
    page_size = 10,
    start_cursor,
    category,
    tag,
    search,
  }: {
    page_size?: number
    start_cursor?: string
    category?: string
    tag?: string
    search?: string
  }) {
    let filterProps = []
    if (category) {
      filterProps.push({
        property: 'Category',
        relation: {
          contains: category,
        },
      })
    }
    if (tag) {
      filterProps.push({
        property: 'Keywords',
        relation: {
          contains: tag,
        },
      })
    }
    if (search) {
      filterProps.push({
        property: 'Title',
        title: {
          contains: search,
        },
      })
    } else {
      filterProps.push({
        property: 'Title',
        title: {
          is_not_empty: true,
        },
      })
    }

    const filter: any = {
      and: [
        {
          property: 'Status',
          status: { equals: 'Public' },
        },
        ...filterProps,
      ],
    }

    const data: any = await notion.databases.query({
      database_id: TABLE_ID_PRODUCTS!,
      page_size: +page_size,
      start_cursor,
      filter,
    })

    return data as IProjectsResp
  },
  async getHightedProducts() {
    const data: any = await notion.databases.query({
      database_id: TABLE_ID_PRODUCTS!,
      filter: {
        and: [
          {
            property: 'Highlighted',
            checkbox: {
              equals: true,
            },
          },
          {
            property: 'Title',
            title: {
              is_not_empty: true,
            },
          },
          {
            property: 'Status',
            status: { equals: 'Public' },
          },
        ],
      },
    })

    return data as IProjectsResp
  },
  async getCategories() {
    const data: any = await notion.databases.query({
      database_id: TABLE_ID_CATEGORIES!,
      page_size: 20,
    })

    return data as ICategoriesResp
  },
  async getTags() {
    const data: any = await notion.databases.query({
      database_id: TABLE_ID_TAGS!,
      page_size: 20,
    })
    return data as ITagsResp
  },
  async getBlog() {},
  async getProject(id: string) {
    const data = await notion.pages.retrieve({ page_id: id })
    return data as IProduct
  },
  async getProduct(
    id: string,
    skipContent = false,
  ): Promise<{ data: IProduct; pageContent?: any }> {
    const data: any = await notion.pages.retrieve({ page_id: id })
    if (skipContent) {
      return { data }
    }

    const pageContent = await notionX.getPage(id)

    return { data, pageContent }
  },
  async getRelatedProducts(id: string) {
    const data: any = await notion.databases.query({
      database_id: TABLE_ID_PRODUCTS!,
      page_size: 6,
      filter: {
        and: [
          {
            property: 'Related Products',
            relation: {
              contains: id,
            },
          },
          {
            property: 'Title',
            title: {
              is_not_empty: true,
            },
          },
        ],
      },
    })

    return data.results as IProduct[]
  },

  async submitContact({
    name,
    email,
    phone,
    location,
    bill,
    area,
    powerUsage,
  }: {
    name: string
    email: string
    phone: string
    location: string
    bill: string
    area: string
    powerUsage: string
  }) {
    await notion.pages.create({
      parent: {
        database_id: TABLE_ID_CONTACTS!,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        Phone: {
          phone_number: phone,
        },
        Location: {
          rich_text: [
            {
              text: {
                content: location,
              },
            },
          ],
        },
        Bill: {
          rich_text: [
            {
              text: {
                content: bill,
              },
            },
          ],
        },
        'Power usage': {
          rich_text: [
            {
              text: {
                content: powerUsage,
              },
            },
          ],
        },
        Area: {
          rich_text: [
            {
              text: {
                content: powerUsage,
              },
            },
          ],
        },
        Status: {
          status: { name: 'New' },
        },
      },
    })
  },
}

export default NotionClient
