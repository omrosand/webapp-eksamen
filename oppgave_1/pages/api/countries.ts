// TODO: Her er det bugs
// importert countries fra data
// endret status fra 404 til 200

import type { NextApiRequest, NextApiResponse } from 'next'
import { countries } from '../../data'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const country = countries[Math.floor(Math.random() * countries.length)]
  return res.status(200).json({ success: true, data: country })
}
