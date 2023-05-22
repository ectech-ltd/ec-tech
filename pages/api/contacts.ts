// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import NotionClient from '@/lib/notion'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  try {
    if (req.method != 'POST') {
      throw new Error('invalid method')
    }

    const resp = await NotionClient.submitContact(req.body)
    res.status(200).json(resp)
  } catch (err) {
    res.status(400).json({ error: 'internal server error' })
  }
}
