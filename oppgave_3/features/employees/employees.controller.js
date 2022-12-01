import * as employeeService from './employees.service'

export const createEmployee = async (req, res) => {
  const data = req.body

  if (!data.name)
    return res.status(400).json({ success: false, error: 'Name is required' })

  const createdEmployee = await employeeService.create({
    data,
  })

  if (!createdEmployee?.success) {
    return res.status(400).json({ success: false, error: createEmployee.error })
  }

  return res.status(201).json({
    success: true,
    resource: '/employees/index',
    data: employee,
  })
}
