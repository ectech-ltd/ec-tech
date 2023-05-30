export interface IProjectResp {
  object: string
  results: IProject[]
  next_cursor: any
  has_more: boolean
  type: string
  page: Page2
}

export interface IProject {
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
  Location: Location
  Power: Power
  Status: Status
  'Created time': CreatedTime
  System: System
  'Power Storage': PowerStorage
  'Last edited time': LastEditedTime
  'Short Description': ShortDescription
  Photos: Photos
  Highlighted: Highlighted
  Inverter: Inverter
  Page: Page
  Owner: Owner
}

interface Location {
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

interface Power {
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

interface System {
  id: string
  type: string
  rich_text: RichText3[]
}

interface RichText3 {
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

interface PowerStorage {
  id: string
  type: string
  rich_text: RichText4[]
}

interface RichText4 {
  type: string
  text: Text4
  annotations: Annotations4
  plain_text: string
  href: any
}

interface Text4 {
  content: string
  link: any
}

interface Annotations4 {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

interface LastEditedTime {
  id: string
  type: string
  last_edited_time: string
}

interface ShortDescription {
  id: string
  type: string
  rich_text: RichText5[]
}

interface RichText5 {
  type: string
  text: Text5
  annotations: Annotations5
  plain_text: string
  href: any
}

interface Text5 {
  content: string
  link: any
}

interface Annotations5 {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

interface Photos {
  id: string
  type: string
  files: File[]
}

interface File {
  name: string
  type: string
  file: File2
}

interface File2 {
  url: string
  expiry_time: string
}

interface Highlighted {
  id: string
  type: string
  checkbox: boolean
}

interface Inverter {
  id: string
  type: string
  rich_text: RichText6[]
}

interface RichText6 {
  type: string
  text: Text6
  annotations: Annotations6
  plain_text: string
  href: any
}

interface Text6 {
  content: string
  link: any
}

interface Annotations6 {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

interface Page {
  id: string
  type: string
  title: Title[]
}

interface Title {
  type: string
  text: Text7
  annotations: Annotations7
  plain_text: string
  href: any
}

interface Text7 {
  content: string
  link: any
}

interface Annotations7 {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

interface Owner {
  id: string
  type: string
  people: People[]
}

interface People {
  object: string
  id: string
}

interface Page2 {}
