import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()
const studentFactory = (count: number) => {
  return Array(count)
    .fill(null)
    .map(() => {
      return {
        title: faker.name.firstName(),
        gender: faker.name.sexType(),
        age: faker.datatype.number({
          'min': 18,
          'max': 50
      }),
        group: faker.helpers.arrayElement(['informatikk', 'informasjonssystemer', 'digitale medier og design']),
      }
    })
}

async function main() {
  console.log(`Start seeding ...`)
  const students = studentFactory(3)
  for (const student of students) {
    await prisma.student.create({ data: student })
  }
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
