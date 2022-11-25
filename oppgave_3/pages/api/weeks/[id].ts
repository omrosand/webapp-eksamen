import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method?.toLowerCase()) {
    case 'get': {
      const id = req.query.id as string
      if (!id)
        return res.status(400).json({ success: false, error: 'No Id found' })
      const week = await prisma.week.findUnique({
        where: {
          id: id,
        },
        include: {
          days: {
            include: { employee: true },
          },
        },
      })
      if (!week)
        return res.status(404).json({ success: false, error: 'Week not found' })
      return res.status(200).json({
        success: true,
        resource: `/weeks/${id}`,
        data: week,
      })
    }
    default:
      return res
        .status(400)
        .json({ success: false, error: 'Only GET method allowed' })
  }
}
