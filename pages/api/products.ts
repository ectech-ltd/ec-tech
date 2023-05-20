// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import NotionClient from '@/lib/notion'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  try {
    const resp = await NotionClient.getProducts(req.query)
    res.status(200).json(resp)
  } catch (err) {
    res.status(400).json({ error: 'internal server error' })
  }
}
