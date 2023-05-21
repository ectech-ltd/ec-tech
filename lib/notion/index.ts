import axios from 'axios'
import { ICategoriesResp } from './categories'
import { IProduct, IProjectsResp } from './products'
import { ITagsResp } from './tags'
import { NotionAPI } from 'notion-client'

const { Client } = require('@notionhq/client')

const TABLE_ID_PROJECTS = process.env.NOTION_TABLE_ID_PROJECTS
const TABLE_ID_PRODUCTS = process.env.NOTION_TABLE_ID_PRODUCTS
const TABLE_ID_CATEGORIES = process.env.NOTION_TABLE_ID_CATEGORIES
const TABLE_ID_TAGS = process.env.NOTION_TABLE_ID_TAGS
const TABLE_ID_BLOG = process.env.NOTION_TABLE_ID_BLOG

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
    let filter = undefined
    if (category) {
      filter = {
        property: 'Category',
        relation: {
          contains: category,
        },
      }
    }
    if (tag) {
      filter = {
        property: 'Keywords',
        relation: {
          contains: tag,
        },
      }
    }
    if (search) {
      filter = {
        property: 'Title',
        title: {
          contains: search,
        },
      }
    }

    const data: IProjectsResp = await notion.databases.query({
      database_id: TABLE_ID_PRODUCTS,
      page_size: +page_size,
      start_cursor,
      filter,
    })

    return data
  },
  async getHightedProducts() {
    const data: IProjectsResp = await notion.databases.query({
      database_id: TABLE_ID_PRODUCTS,
      filter: {
        property: 'Highlighted',
        checkbox: {
          equals: true,
        },
      },
    })

    return data
  },
  async getCategories() {
    const data: ICategoriesResp = await notion.databases.query({
      database_id: TABLE_ID_CATEGORIES,
      page_size: 20,
    })

    return data
  },
  async getTags() {
    const data: ITagsResp = await notion.databases.query({
      database_id: TABLE_ID_TAGS,
      page_size: 20,
    })
    return data
  },
  async getBlog() {},
  async getProject(id: string) {
    const data = await notion.pages.retrieve({ page_id: id })
    return data as IProduct
  },
  async getProduct(id: string) {
    const data: IProduct = await notion.pages.retrieve({ page_id: id })
    const { data: pageContent } = await axios.get(
      `https://notion-api.splitbee.io/v1/page/${id}`,
    )

    return { data, pageContent }
  },
}

export default NotionClient
