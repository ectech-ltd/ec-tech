export interface IBlogsResp {
  object: string
  results: IBlog[]
  next_cursor: any
  has_more: boolean
  type: string
  page: Page
}

export interface IBlog {
  object: string
  id: string
  created_time: string
  last_edited_time: string
  created_by: CreatedBy
  last_edited_by: LastEditedBy
  cover?: Cover
  icon: Icon
  parent: Parent
  archived: boolean
  properties: Properties

  url: string
}

interface RichText {
  type: string
  text: Text
  annotations: Annotations
  plain_text: string
  href: any
}

interface ShortDescription {
  id: string
  type: string
  rich_text: RichText[]
}

interface CreatedBy {
  object: string
  id: string
}

interface LastEditedBy {
  object: string
  id: string
}

interface Cover {
  type: string
  external?: External
  file?: {
    url: string
  }
}

interface External {
  url: string
}

interface Icon {
  type: string
  external: External2
}

interface External2 {
  url: string
}

interface Parent {
  type: string
  database_id: string
}

interface Properties {
  Title: Title
  Tags: Tags
  'Created by': CreatedBy2
  'Short Description': ShortDescription
  Status: Status
  'Created time': CreatedTime
  'Last edited by': LastEditedBy2
  'Last edited time': LastEditedTime
}

interface Title {
  id: string
  type: string
  title: Title2[]
}

interface Title2 {
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

interface Tags {
  id: string
  type: string
  multi_select: MultiSelect[]
}

interface MultiSelect {
  id: string
  name: string
  color: string
}

interface CreatedBy2 {
  id: string
  type: string
  created_by: CreatedBy3
}

interface CreatedBy3 {
  object: string
  id: string
}

interface Status {
  id: string
  type: string
  status: Status2
}

interface Status2 {
  id: string
  name: string
  color: string
}

interface CreatedTime {
  id: string
  type: string
  created_time: string
}

interface LastEditedBy2 {
  id: string
  type: string
  last_edited_by: LastEditedBy3
}

interface LastEditedBy3 {
  object: string
  id: string
}

interface LastEditedTime {
  id: string
  type: string
  last_edited_time: string
}

interface Page {}
