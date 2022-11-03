import fetcher from '../lib/fetch'

const BASE_URL = '/api'
const STUDENTS_URL = `${BASE_URL}/students`

export const getStudents = (options: any) => {
  return fetcher(STUDENTS_URL, {
    method: 'GET',
    ...options,
  })
}

