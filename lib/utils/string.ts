import slugify from 'slugify'
import { IProduct } from '../notion/products'
import { IProject } from '../notion/project'
import { IBlog } from '../notion/blogs'

export function formatCurrency(num = 0, currency = 'USD') {
  try {
    if (num <= 0.001) {
      return `$${num}`
    }

    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      compactDisplay: 'short',
      currency,
    })

    return formatter.format(+num.toFixed(2))
  } catch (error) {
    return `$${num}`
  }
}

export function formatNumber(num = 0) {
  try {
    if (Math.abs(num) <= 0.01) {
      return num.toString()
    }

    const formatter = new Intl.NumberFormat('en-US', { style: 'decimal' })

    return formatter.format(+num.toFixed(3))
  } catch (err) {
    return num.toString()
  }
}

export function formatPercent(num = 0) {
  try {
    if (Math.abs(num) <= 0.1) {
      return `${num}%`
    }

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'percent',
      maximumFractionDigits: 2,
      maximumSignificantDigits: 4,
    })

    return formatter.format(num / 100)
  } catch (err) {
    return `${num}%`
  }
}

export function createProductSlug(product: IProduct) {
  const slug =
    product.properties.Slug.rich_text[0]?.plain_text.replace('/', '') ||
    product.properties.Title.title[0]?.plain_text

  return ['/san-pham', slugify(`${slug}.${product.id}`)]?.join('/')
}

export function createProjectSlug(product: IProject) {
  const slug = product.properties.Page.title[0]?.plain_text

  return ['/du-an', slugify(`${slug}.${product.id}`)]?.join('/')
}
export function createBlogSlug(product: IBlog) {
  const slug = product.properties.Title.title[0]?.plain_text

  return ['/tin-tuc-va-khuyen-mai', slugify(`${slug}.${product.id}`)]?.join('/')
}
