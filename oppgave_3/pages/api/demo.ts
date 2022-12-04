import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { employees } from '../../data/employees'
import lunch from '../../data/lunch.json'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method?.toLowerCase()) {
    case 'post':
      const prisma = new PrismaClient()

      async function main() {
        await prisma.day.deleteMany({})
        await prisma.week.deleteMany({})
        await prisma.year.deleteMany({})
        await prisma.employee.deleteMany({})

        const year = await prisma.year.create({
          data: {},
        })

        for (const employee of employees) {
          await prisma.employee.create({
            data: {
              id: employee.id.toString(),
              name: employee.name,
              rules: employee.rules,
            },
          })
        }

        for (const [weekKey, week] of Object.entries(lunch.year)) {
          const weekPrisma = await prisma.week.create({
            data: {
              week: Number(weekKey),
              year: {
                connect: {
                  id: year.id,
                },
              },
            },
          })

          for (const [dayKey, employee] of Object.entries(week.week)) {
            if (employee) {
              await prisma.day.create({
                data: {
                  name: dayKey,
                  week: {
                    connect: {
                      id: weekPrisma.id,
                    },
                  },
                  employee: {
                    connect: {
                      id: employee?.id.toString(),
                    },
                  },
                },
              })
            }
          }
        }
      }

      main()
        .catch((e) => {
          console.error(e)
          process.exit(1)
        })
        .finally(async () => {
          await prisma.$disconnect()
        })

      return res.status(200).json({
        success: true,
        resource: '/demo',
        data: { message: 'Seeding was successful' },
      })
    default:
      return res
        .status(400)
        .json({ success: false, error: 'Only POST method allowed' })
  }
}
