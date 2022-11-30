import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

// TODO: Erstatt any med typede props (samme på Weeks.tsx)

export default function Weeks({ weeks }: any) {
  const [summary, setSummary] = useState(false)
  const [weekSpan, setWeekSpan] = useState({ from: 1, to: 52 })
  const fromRef = useRef<HTMLInputElement>(null)
  const toRef = useRef<HTMLInputElement>(null)
  const [weekSpanMessage, setWeekSpanMessage] = useState('Valgte uker:')

  const handleWeekSpan = (e: any) => {
    e.preventDefault()
    const from = fromRef.current?.value
    const to = toRef.current?.value

    if (!from || !to) {
      setWeekSpanMessage(`Velg "fra" og "til" ukenummer`)
      return
    }
    setWeekSpan({ from: parseInt(from), to: parseInt(to) })
    setWeekSpanMessage('Valgte uker:')
  }

  const createWeekSpanArray = () => {
    const arr = []
    let currentNumber = weekSpan.from
    while (currentNumber <= weekSpan.to) {
      arr.push(currentNumber)
      currentNumber++
    }
    return arr
  }

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
          defaultValue="1"
        />
        <label htmlFor="to">Til: </label>
        <input
          type="number"
          id="to"
          ref={toRef}
          min="1"
          max="52"
          defaultValue="52"
        />
        <button type="submit">Vis uker</button>
        <button type="button" onClick={() => setWeekSpan({ from: 1, to: 52 })}>
          Vis alle uker
        </button>
      </form>

      <h2>{weekSpanMessage}</h2>
      <ul>
        {weeks.map((week: any) => {
          if (weekArray.includes(week.week)) {
            return (
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
            )
          }
        })}
      </ul>
    </>
  )
}
