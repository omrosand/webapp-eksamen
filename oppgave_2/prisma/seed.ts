import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)
  const createUsers = await prisma.student.createMany({
    data: [
      {
        title: 'Ole',
        gender: 'male',
        age: 30,
        group: 'informasjonssystemer',
      },
      {
        title: 'Natalie',
        gender: 'female',
        age: 22,
        group: 'informasjonssystemer',
      },
    ],
    skipDuplicates: true,
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
