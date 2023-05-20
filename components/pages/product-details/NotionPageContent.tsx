'use client'

import { NotionRenderer } from 'react-notion'
import 'react-notion/src/styles.css'

export default function NotionPageContent({ recordMap }: { recordMap: any }) {
  return (
    <div className="notion-page-content mt-24">
      <NotionRenderer blockMap={recordMap} fullPage={true} />
    </div>
  )
}
