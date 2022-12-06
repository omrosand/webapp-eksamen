import fetcher from '../lib/fetch'

const BASE_URL = '/api/weeks'

export const postOverride = (id: string, data: any) => {
  return fetcher(`${BASE_URL}/${id}/overrides`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
