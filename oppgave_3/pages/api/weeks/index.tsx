import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method?.toLowerCase()) {
    case 'get':
      return res.status(200).json({ success: true, data: ['index'] })
    default:
      return res
        .status(400)
        .json({ success: false, error: 'Only GET method allowed' })
  }
}
