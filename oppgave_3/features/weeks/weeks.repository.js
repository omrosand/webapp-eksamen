import prisma from '@lib/db'

export const findMany = async () => {
    try {
        const weeks = await prisma.weeks.findMany()

        return {success: true, data: weeks}
    } catch(error) {
        console.log(error)
        return {success: false, error: 'Failed finding weeks'} 
    }
}

