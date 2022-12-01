import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/db'
import { Employee } from '../../../types'
import * as employeesController from '@/features/employees/employees.controller'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method?.toLowerCase()) {
    case 'get':
      await employeesController.listEmployer(req, res)
      
      const employees = await prisma.employee.findMany({})
      return res.status(200).json({
        success: true,
        resource: '/employees/index',
        data: employees,
      })
    case 'post':
      await employeesController.createEmployer(req, res)
      
      const data = req.body
      if (!data.name)
        return res
          .status(400)
          .json({ success: false, error: 'Name is required' })
      const employee = await prisma.employee.create({ data })
      return res.status(201).json({
        success: true,
        resource: '/employees/index',
        data: employee,
      })
    default:
      return res
        .status(400)
        .json({ success: false, error: 'Only GET method allowed' })
  }
}
