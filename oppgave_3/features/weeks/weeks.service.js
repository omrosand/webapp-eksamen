import * as weeksRepo from './weeks.repository'

export const list = async () => {
  const weeks = await weeksRepo.findMany()

  if (!weeks.success)
    return {
      success: false,
      error: weeks.error,
    }

  return { success: true, data: weeks.data }
}
