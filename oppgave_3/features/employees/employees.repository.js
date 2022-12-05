import prisma from '@/lib/db'

export const create = async (data) => {
  try {
    const employee = await prisma.employee.create({ data })

    return { success: true, data: employee }
  } catch (error) {
    return { success: false, error: 'Failed creating employee' }
  }
}

export const exist = async ({ data }) => {
  try {
    const employee = await prisma.employee.findUnique({
      where: {
        data,
      },
    })
    return { success: true, data: employee }
  } catch (error) {
    return { success: false, error: 'Failed finding employee' }
  }
}
