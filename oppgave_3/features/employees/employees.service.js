import * as employeesRepo from './employees.repository'

export const create = async ({data}) => {
    const employee = await employeesRepo.exist({data})

    if(employee?.error) return {success: false, error: employee.error}

    if(employee.data) return {success: false, error: 'Employee already exist'}

    const createdEmployee = await employeesRepo.create({data})

    if(!createdEmployee.success) return {success: false, error: createdEmployee.error}

    return {success: true, data: createdEmployee.data}
}