import { map } from 'lodash'
import { ICategoriesResp } from './categories'
import { IProduct, IProductResp } from './products'
import { ITagsResp } from './tags'
import { Client } from '@notionhq/client'
// @ts-ignore
import { NotionAPI } from 'notion-client'
import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { IProject, IProjectResp } from './project'
import { IBlog, IBlogsResp } from './blogs'

const TABLE_ID_PRODUCTS = process.env.NOTION_TABLE_ID_PRODUCTS
const TABLE_ID_CATEGORIES = process.env.NOTION_TABLE_ID_CATEGORIES
const TABLE_ID_TAGS = process.env.NOTION_TABLE_ID_TAGS
const TABLE_ID_CONTACTS = process.env.NOTION_TABLE_ID_CONTACTS
const TABLE_ID_SITE_CONFIGS = process.env.NOTION_TABLE_ID_SITE_CONFIGS
const TABLE_ID_PROJECTS = process.env.NOTION_TABLE_ID_PROJECTS
const TABLE_ID_BLOG = process.env.NOTION_TABLE_ID_BLOG

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

const notionX = new NotionAPI()

const NotionClient = {
  async getConfigs() {
    const data = await notion.databases.query({
      database_id: TABLE_ID_SITE_CONFIGS!,
      page_size: 100,
      filter: {
        property: 'Name',
        title: {
          is_not_empty: true,
        },
      },
      sorts: [
        {
          property: 'Name',
          direction: 'ascending',
        },
      ],
    })

    const homeBanners: any = data.results.filter(
      (item: any) => item.properties.Type.select.name === 'Home Banners',
    )

    const services = data.results.filter(
      (item: any) => item.properties.Type.select.name === 'Our Services',
    )

    return {
      homeBanners: map(
        homeBanners.filter((item: any) => !item.archived),
        (item: any) => ({
          id: item.id,
          photo: item.properties.Photos?.files[0].file.url || [],
          name: item.properties.Name?.plain_text || '',
          url: item.properties.URL?.url || '',
        }),
      ).filter((item) => item.photo),
      services: map(
        services.filter((item: any) => !item.archived),
        (item: any) => ({
          id: item.id,
          url: item.properties.URL?.url || '',
          photo: item.properties.Photos?.files[0].file.url || '',
          cta: item.properties.CTA?.rich_text[0].plain_text || '',
          title:
            (item.properties.Title?.rich_text as RichTextItemResponse) || [],
          content:
            (item.properties.Content?.rich_text as RichTextItemResponse) || [],
        }),
      ).filter((item) => item.photo),
    }
  },
  async getProjects({
    page_size = 10,
    start_cursor,
    search,
    highlighted,
  }: {
    page_size?: number
    start_cursor?: string
    search?: string
    highlighted?: boolean
  }) {
    let filterProps = []
    if (search) {
      filterProps.push({
        property: 'Page',
        title: {
          contains: search,
        },
      })
    } else {
      filterProps.push({
        property: 'Page',
        title: {
          is_not_empty: true,
        },
      })
    }

    if (highlighted) {
      filterProps.push({
        property: 'Highlighted',
        checkbox: {
          equals: true,
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
      database_id: TABLE_ID_PROJECTS!,
      page_size: +page_size,
      start_cursor,
      filter,
      sorts: [
        {
          property: 'Created time',
          direction: 'descending',
        },
      ],
    })

    return data as IProjectResp
  },
  async getBlogs({
    page_size = 10,
    start_cursor,
    search,
  }: {
    page_size?: number
    start_cursor?: string
    search?: string
    highlighted?: boolean
  }) {
    let filterProps = []
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
      database_id: TABLE_ID_BLOG!,
      page_size: +page_size,
      start_cursor,
      filter,
      sorts: [
        {
          property: 'Created time',
          direction: 'descending',
        },
      ],
    })

    return data as IBlogsResp
  },
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

    return data as IProductResp
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

    return data as IProductResp
  },
  async getCategories() {
    const data: any = await notion.databases.query({
      database_id: TABLE_ID_CATEGORIES!,
      page_size: 20,
      filter: {
        property: 'Name',
        title: {
          is_not_empty: true,
        },
      },
    })

    return data as ICategoriesResp
  },
  async getTags() {
    const data: any = await notion.databases.query({
      database_id: TABLE_ID_TAGS!,
      page_size: 20,
      filter: {
        property: 'Name',
        title: {
          is_not_empty: true,
        },
      },
    })
    return data as ITagsResp
  },
  async getBlog(id: string): Promise<{ data: IBlog; pageContent?: any }> {
    const data: any = await notion.pages.retrieve({ page_id: id })

    const pageContent = await notionX.getPage(id)

    return { data, pageContent }
  },
  async getProject(id: string): Promise<{ data: IProject; pageContent?: any }> {
    const data: any = await notion.pages.retrieve({ page_id: id })

    const pageContent = await notionX.getPage(id)

    return { data, pageContent }
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
      page_size: 8,
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
          {
            property: 'Status',
            status: { equals: 'Public' },
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

  async getTerms(): Promise<{ pageContent?: any }> {
    const data = await notion.databases.query({
      database_id: TABLE_ID_SITE_CONFIGS!,
      page_size: 100,
      filter: {
        property: 'Type',
        select: {
          equals: 'Terms',
        },
      },
      sorts: [
        {
          property: 'Name',
          direction: 'ascending',
        },
      ],
    })

    const pageContent = await notionX.getPage(data.results[0].id)

    return { pageContent }
  },
  async getFaqs(): Promise<{ pageContent?: any }> {
    const data = await notion.databases.query({
      database_id: TABLE_ID_SITE_CONFIGS!,
      page_size: 100,
      filter: {
        property: 'Type',
        select: {
          equals: 'FAQs',
        },
      },
      sorts: [
        {
          property: 'Name',
          direction: 'ascending',
        },
      ],
    })

    const pageContent = await notionX.getPage(data.results[0].id)

    return { pageContent }
  },
}

export default NotionClient
