import fetcher from '../lib/fetch'

const BASE_URL = '/api'
const WEEKS_URL = `${BASE_URL}/weeks`

export const getWeeks = (options: any) => {
  return fetcher(WEEKS_URL, {
    method: 'GET',
    ...options,
  })
}

export const getWeek = (id: string) => {
  return fetcher(`${WEEKS_URL}/${id}`, {
    method: 'GET',
  })
}
