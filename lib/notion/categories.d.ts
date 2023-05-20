export interface ICategoriesResp {
  object: string
  results: ICategory[]
  next_cursor: any
  has_more: boolean
  type: string
  page: Page
}

export interface ICategory {
  object: string
  id: string
  created_time: string
  last_edited_time: string
  created_by: CreatedBy
  last_edited_by: LastEditedBy
  cover: any
  icon: Icon
  parent: Parent
  archived: boolean
  properties: Properties
  url: string
}

interface CreatedBy {
  object: string
  id: string
}

interface LastEditedBy {
  object: string
  id: string
}

interface Icon {
  type: string
  external: External
}

interface External {
  url: string
}

interface Parent {
  type: string
  database_id: string
}

interface Properties {
  Created: Created
  Products: Products
  Name: Name
}

interface Created {
  id: string
  type: string
  created_time: string
}

interface Products {
  id: string
  type: string
  relation: Relation[]
  has_more: boolean
}

interface Relation {
  id: string
}

interface Name {
  id: string
  type: string
  title: Title[]
}

interface Title {
  type: string
  text: Text
  annotations: Annotations
  plain_text: string
  href: any
}

interface Text {
  content: string
  link: any
}

interface Annotations {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

interface Page {}
