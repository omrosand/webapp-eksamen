import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method?.toLowerCase()) {
    case 'get':
      const id = req.query.id
      return res.status(200).json({
        success: true,
        resource: `/weeks/${id}`,
        data: [],
      })
    default:
      return res
        .status(400)
        .json({ success: false, error: 'Only GET method allowed' })
  }
}
