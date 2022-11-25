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
          <li className="weekListElement" key={week.id}>
            <h2>Uke {week.week}</h2>
            <details onToggle={() => setSummary((prev) => !prev)}>
              <summary>
                {!summary ? <span>Se dager</span> : <span>Lukk dager</span>}
              </summary>
              <ul></ul>
            </details>
          </li>
        ))}
      </ul>
    </>
  )
}
