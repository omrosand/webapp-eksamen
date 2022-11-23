import fetcher from '../lib/fetch'

const BASE_URL = '/api'
const WEEKS_URL = `${BASE_URL}/employees`

export const getWeeks = (options: any) => {
  return fetcher(WEEKS_URL, {
    method: 'GET',
    ...options,
  })
}

export const getWeek = (id: string, options: any) => {
  return fetcher(`${WEEKS_URL}/${id}`, {
    method: 'GET',
    ...options,
  })
}
