import type { NextApiRequest, NextApiResponse } from 'next'

type Student = {
  id: string
  title: string
  gender: string
  age: number
  group: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method?.toLowerCase()) {
    case 'get':
      return res.status(200).json({ success: true, data: [] })
    default:
      return res
        .status(400)
        .json({ success: false, error: 'Method not allowed' })
  }
}
