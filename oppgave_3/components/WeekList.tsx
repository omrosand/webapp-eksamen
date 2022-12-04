import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import useWeekSpan from '../hooks/useWeekSpan'
import Title from './Title'

// TODO: Erstatt any med typede props (samme på Weeks.tsx)

export default function Weeks({ weeks }: any) {
  const [summary, setSummary] = useState(false)
  const {
    createWeekSpanArray,
    handleWeekSpan,
    weekSpan,
    setWeekSpan,
    fromRef,
    toRef,
    weekSpanMessage,
  } = useWeekSpan()

  const weekArray = createWeekSpanArray()

  const toggleWeekView = (e: any) => {
    setSummary((prev) => !prev)
    if (summary) return
    console.log(e.currentTarget.id)
  }

  return (
    <>
      <form onSubmit={handleWeekSpan}>
        <label htmlFor="from">Fra: </label>
        <input
          type="number"
          id="from"
          ref={fromRef}
          min="1"
          max="52"
          defaultValue={weekSpan.from}
        />
        <label htmlFor="to">Til: </label>
        <input
          type="number"
          id="to"
          ref={toRef}
          min="1"
          max="52"
          defaultValue={weekSpan.to}
        />
        <button className="appButton" type="submit">
          Vis uker
        </button>
        <button
          className="appButton"
          type="button"
          onClick={() => setWeekSpan({ from: 1, to: 52 })}
        >
          Vis alle uker
        </button>
      </form>
      <Title title={weekSpanMessage} Tag="h2" />
      <ul>
        {weeks.map((week: any) => {
          if (weekArray.includes(week.week)) {
            return (
              <li
                className={week.days.length > 0 ? 'weekListElement' : 'noLunch'}
                key={week.id}
              >
                <Title title={`Uke ${week.week}`} Tag="h2" />
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
                  <Title title="Friuke 🥳" Tag="h3" />
                )}
              </li>
            )
          }
        })}
      </ul>
    </>
  )
}
