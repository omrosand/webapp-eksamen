import type { NextApiRequest, NextApiResponse } from 'next'
import { Employee } from '../../../types'

const testEmployee: Employee = {
  id: 729,
  name: 'Herr Testesen',
  rules: 'rules are meant to be broken',
}
const testEmployees: Employee[] = [testEmployee]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method?.toLowerCase()) {
    case 'get':
      return res.status(200).json({ success: true, data: testEmployees })
    case 'post':
      const postData = req.body
      testEmployees.push(postData)
      return res.status(201).json({ success: true, data: testEmployees })
    default:
      return res
        .status(400)
        .json({ success: false, error: 'Only GET method allowed' })
  }
}
