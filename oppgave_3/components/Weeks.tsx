import { Week } from '@prisma/client'
import Link from 'next/link'
import { Year } from '../types'
import Title from './Title'

export default function Weeks({ weeks }: Year) {
  return (
    <>
      <Title title="Uker" Tag="h2" />
      <div className="weekWrapper">
        {weeks.map((week: any) =>
          week.days.length > 0 ? (
            <Link
              key={week.id}
              href={{
                pathname: `/weeks/${week.id}`,
              }}
            >
              <h2 className="weekNumber">{week.week}</h2>
            </Link>
          ) : (
            <Link
              key={week.id}
              href={{
                pathname: `/weeks/${week.id}`,
              }}
            >
              <h2 className="freeWeekNumber">{week.week}</h2>
            </Link>
          )
        )}
      </div>
      <hr></hr>
    </>
  )
}
