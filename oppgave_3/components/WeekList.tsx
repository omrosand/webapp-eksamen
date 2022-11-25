import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getWeeks } from '../api/weeks'

// TODO: Erstatt any med typede props (samme på Weeks.tsx)

export default function Weeks({ weeks }: any) {
  const [summary, setSummary] = useState(false)

  const toggleWeekView = (e: any) => {
    setSummary((prev) => !prev)
    if (summary) return
    console.log(e.currentTarget.id)
  }
  return (
    <>
      <ul>
        {weeks.map((week: any) => (
          <li
            className={week.days.length > 0 ? 'weekListElement' : 'noLunch'}
            key={week.id}
          >
            <h2>Uke {week.week}</h2>
            {week.days.length > 0 ? (
              <details onToggle={toggleWeekView} id={week.id}>
                <summary>Se dager</summary>
                <ul className="weekDetails">
                  {week.days.map((day: any) => (
                    <li key={day.id}>
                      <span>{day.name}</span>
                      <span>
                        <Link href={`/employees/${day.employee.id}`}>
                          {day.employee.name}
                        </Link>
                      </span>
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <h3>Friuke 🥳</h3>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}
