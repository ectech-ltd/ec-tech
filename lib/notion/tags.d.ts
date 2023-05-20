export interface ITagsResp {
  object: string
  results: ITag[]
  next_cursor: any
  has_more: boolean
  type: string
  page: Page
}

export interface ITag {
  object: string
  id: string
  created_time: string
  last_edited_time: string
  created_by: CreatedBy
  last_edited_by: LastEditedBy
  cover: any
  icon: any
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

interface Parent {
  type: string
  database_id: string
}

interface Properties {
  Created: Created
  Name: Name
}

interface Created {
  id: string
  type: string
  created_time: string
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
