import { PrismaClient } from '@prisma/client'
import { employees } from '../../data/employees'
import lunch from '../../data/lunch.json'

const prisma = new PrismaClient()

export async function main() {
  console.log(`Start seeding ...`)

  for (const employee of employees) {
    await prisma.employee.create({
      data: { name: employee.name, rules: employee.rules },
    })
  }
    const year = await prisma.year.create({
      data: {}
    })
    
  Object.entries(lunch.year).map(async ([weekKey, week]) => {
      const weekPrisma = await prisma.week.create({
       data: {week: Number(weekKey), yearId: year.id}
      })

    Object.entries(week.week).map(async ([dayKey, employee]) => {
      if(employee) {
        await prisma.day.create({
        data: {name: dayKey, weekId: weekPrisma.id, employeeId: employee.id.toString()}
      })}
    })
  })

  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
