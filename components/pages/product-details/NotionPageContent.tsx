'use client'

import { NotionRenderer } from 'react-notion'
import 'react-notion/src/styles.css'

export default function NotionPageContent({ recordMap }: { recordMap: any }) {
  return <NotionRenderer blockMap={recordMap} fullPage={true} />
}
