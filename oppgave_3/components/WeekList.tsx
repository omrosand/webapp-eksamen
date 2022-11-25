import { useEffect, useState } from 'react'
import { getWeeks } from '../api/weeks'

export default function Weeks() {
  const [data, setData] = useState({})
  const [weeks, setWeeks] = useState<any[]>([])
  const [summary, setSummary] = useState(false)

  useEffect(() => {
    const fetchWeeks = async () => {
      const data = await getWeeks({})
      setWeeks(data.data)
    }
    fetchWeeks()
  }, [data])

  const toggleWeekView = (e: any) => {
    setSummary((prev) => !prev)
    if (summary) return
    console.log(e.currentTarget.id)
  }
  return (
    <>
      <div className="weekWrapper">
        {weeks.map((week) => (
          <section key={week.id}>
            <h2 className="weekNumber">{week.week}</h2>
          </section>
        ))}
      </div>
      <hr></hr>
      <ul>
        {weeks.map((week) => (
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
              <h3>Friuke</h3>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}
