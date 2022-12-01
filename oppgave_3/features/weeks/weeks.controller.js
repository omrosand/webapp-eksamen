import * as weeksService from './weeks.service'

export const createWeek = async (req, res) => {
    const weeks = await weeksService.list()

    if(weeks.error) return res.status(400).json(weeks.error)

    return res.status(200).json(weeks)
}