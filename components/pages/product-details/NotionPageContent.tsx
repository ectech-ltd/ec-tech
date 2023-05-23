'use client'

import { NotionRenderer } from 'react-notion-x'
import 'react-notion-x/src/styles.css'

export default function NotionPageContent({ recordMap }: { recordMap: any }) {
  return <NotionRenderer recordMap={recordMap} fullPage={true} />
}
