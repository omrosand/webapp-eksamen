import { useEffect, useState } from 'react'
import { getWeeks } from '../api/weeks'

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
                <ul>
                  {week.days.map((day: any) => (
                    <li key={day.id}>
                      <span>{day.name}</span>
                      <span>{day.employee.name}</span>
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
