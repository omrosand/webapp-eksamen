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
      const employee = await prisma.employee.findUnique({
        where: {
          id: id,
        },
        include: {
          days: {
            include: {
              week: true,
            },
          },
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
    }
    case 'put': {
      const id = req.query.id as string
      const employee = await prisma.employee.findUnique({ where: { id } })
      const updatedEmployee = await prisma.employee.update({
        where: {
          id: id,
        },
        data: {
          name: req.body.name,
        },
      })
      return res.status(201).json({
        success: true,
        resource: `/employees/${id}`,
        data: updatedEmployee,
      })
    }
    case 'post': {
      const query = req.query.id as string
      if (!query)
        return res.status(400).json({ success: false, error: 'No query found' })
      const employee = await prisma.employee.findMany({
        where: {
          name: { contains: query },
        },
        include: {
          days: {
            include: {
              week: true,
            },
          },
        },
      })
      if (!employee)
        return res
          .status(404)
          .json({ success: false, error: 'Employee not found' })
      return res.status(200).json({
        success: true,
        resource: `/employees/search/${query}`,
        data: employee,
      })
    }
    default:
      return res
        .status(400)
        .json({ success: false, error: 'Only GET and PUT method allowed' })
  }
}
