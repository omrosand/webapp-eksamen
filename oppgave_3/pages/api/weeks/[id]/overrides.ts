import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method?.toLowerCase()) {
    case 'post': {
      const id = req.query.id as string
      if (!id)
        return res
          .status(400)
          .json({ success: false, error: 'No valid week Id found' })

      const week = await prisma.week.findUnique({ where: { id } })
      const override = await prisma.override.create({
        data: {
          day: req.body.day,
          employee: req.body.employee,
          week: { connect: { id: week?.id } },
        },
      })
      return res.status(201).json({
        success: true,
        resource: `/employees/${id}/override`,
        data: override,
      })
    }
    default:
      return res
        .status(400)
        .json({ success: false, error: 'Only POST method allowed' })
  }
}
