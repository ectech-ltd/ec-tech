export interface IProjectsResp {
  object: string
  results: IProduct[]
  next_cursor: string
  has_more: boolean
  type: string
  page: Page
}

export interface IProduct {
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
  Category: Category
  'Added By': AddedBy
  Rate: Rate
  'Related Products': RelatedProducts
  Summary: Summary
  Spec: Spec
  Keywords: Keywords
  Photos: Photos
  Added: Added
  Highlighted: Highlighted
  Title: Title
}

interface Category {
  id: string
  type: string
  relation: Relation[]
  has_more: boolean
}

interface Relation {
  id: string
}

interface AddedBy {
  id: string
  type: string
  created_by: CreatedBy2
}

interface CreatedBy2 {
  object: string
  id: string
}

interface Rate {
  id: string
  type: string
  select: Select
}

interface Select {
  id: string
  name: string
  color: string
}

interface RelatedProducts {
  id: string
  type: string
  relation: Relation2[]
  has_more: boolean
}

interface Relation2 {
  id: string
}

interface Summary {
  id: string
  type: string
  rich_text: RichText[]
}

interface RichText {
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

interface Spec {
  id: string
  type: string
  rich_text: RichText2[]
}

interface RichText2 {
  type: string
  text: Text2
  annotations: Annotations2
  plain_text: string
  href: any
}

interface Text2 {
  content: string
  link: any
}

interface Annotations2 {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

interface Keywords {
  id: string
  type: string
  relation: Relation3[]
  has_more: boolean
}

interface Relation3 {
  id: string
}

interface Photos {
  id: string
  type: string
  files: IFile[]
}

export interface IFile {
  name: string
  type: string
  file: File2
}

interface File2 {
  url: string
  expiry_time: string
}

interface Added {
  id: string
  type: string
  created_time: string
}

interface Highlighted {
  id: string
  type: string
  checkbox: boolean
}

interface Title {
  id: string
  type: string
  title: Title2[]
}

interface Title2 {
  type: string
  text: Text3
  annotations: Annotations3
  plain_text: string
  href: any
}

interface Text3 {
  content: string
  link: any
}

interface Annotations3 {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

interface Page {}
