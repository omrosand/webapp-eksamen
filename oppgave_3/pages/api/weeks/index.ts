import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method?.toLowerCase()) {
    case 'get':
      
      const weeks = await prisma.week.findMany({
        include: {
          days: {
            include: { employee: true },
          },
        },
      })
      return res.status(200).json({
        success: true,
        resource: '/weeks/index',
        data: weeks,
      })
    default:
      return res
        .status(400)
        .json({ success: false, error: 'Only GET method allowed' })
  }
}
