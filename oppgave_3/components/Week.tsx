import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getWeek } from '../api/weeks'
import Link from 'next/link'

const Employee = () => {
  const [week, setWeek] = useState<any>({})
  const [data, setData] = useState({})

  const router = useRouter()
  const weekId = router.query?.id as string

  useEffect(() => {
    const fetchWeek = async () => {
      if (!weekId) return
      const data = await getWeek(weekId)
      setWeek(data.data)
    }
    fetchWeek()
  }, [data, weekId])

  return (
    <>
      <h1>Uke {week.week} Oversikt</h1>
      {week.days?.length > 0 ? (
        <ul className="weekDetails">
          {week.days?.map((day: any) => (
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
      ) : (
        <p>Uke {week.week} er friuke og ingen lunsj</p>
      )}
    </>
  )
}
export default Employee
