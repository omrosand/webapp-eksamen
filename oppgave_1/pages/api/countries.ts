// TODO: Her er det bugs
// importert countries fra data

import type { NextApiRequest, NextApiResponse } from 'next'
import { countries } from '../../data'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const country = countries[Math.floor(Math.random() * countries.length)]
  return res.status(404).json({ success: true, data: country })
}
