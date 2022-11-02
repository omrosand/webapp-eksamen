import type { NextApiRequest, NextApiResponse } from 'next'
import { countries } from '../../../../data'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const id = req.query.id

  const country = countries[Math.floor(Math.random() * countries.length)]
  return res.status(200).json({ success: true, data: country.unicodeFlag, id })
}
