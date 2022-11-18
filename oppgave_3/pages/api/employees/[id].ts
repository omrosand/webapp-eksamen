import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method?.toLowerCase()) {
    case 'get':
      const id = req.query.id as string
      if (!id)
        return res.status(400).json({ success: false, error: 'No Id found' })
      const employee = await prisma.employee.findUnique({
        where: {
          id: id,
        },
      })

      if (!employee)
        return res
          .status(404)
          .json({ success: false, error: 'Employee not found' })
      return res.status(200).json({
        success: true,
        resource: `/employees/${id}`,
        data: employee,
      })
    default:
      return res
        .status(400)
        .json({ success: false, error: 'Only GET and PUT method allowed' })
  }
}
