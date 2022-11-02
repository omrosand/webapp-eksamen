//finner indexen til landet som søkes på og returnerer flagget

import type { NextApiRequest, NextApiResponse } from 'next'
import { countries } from '../../../../data'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id } = req.query

  const flagIndex = countries.findIndex((e) => e.name.toLowerCase() === id)
  if (flagIndex < 0) {
    res.status(404).json({ success: true, data: 'No flag found.' })
  } else {
    const country = countries[flagIndex]
    return res.status(200).json({ success: true, data: country.unicodeFlag })
  }
}
