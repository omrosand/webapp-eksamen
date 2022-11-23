import fetcher from '../lib/fetch'

const BASE_URL = '/api'
const EMPLOYEES_URL = `${BASE_URL}/employees`

export const getEmployees = (options: any) => {
  return fetcher(EMPLOYEES_URL, {
    method: 'GET',
    ...options,
  })
}

export const postEmployee = (data: any) => {
  return fetcher(EMPLOYEES_URL, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export const getEmployee = (id: string, options: any) => {
  return fetcher(`${EMPLOYEES_URL}/${id}`, {
    method: 'GET',
    ...options,
  })
}

export const putEmployee = (id: string, name: string) => {
  return fetcher(`${EMPLOYEES_URL}/${id}`, {
    method: 'PUT',
    body: name,
  })
}
