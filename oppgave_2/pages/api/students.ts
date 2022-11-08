import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method?.toLowerCase()) {
    case 'get':

      const students = await prisma.student.findMany({})
      return res.status(200).json({ status: true, data: students })
    case 'post':
      const data = req.body

      const student = await prisma.student.create({ data })
      return res.status(201).json({ status: true, data: student })
    default:
      return res.status(405).json({
        success: false,
        error: 'Method not allowed',
      })
  }
}
