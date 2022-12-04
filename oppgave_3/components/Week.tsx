import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getWeek } from '../api/weeks'
import Link from 'next/link'
import Override from './Override'

const Employee = () => {
  const [week, setWeek] = useState<any>({})
  const [data, setData] = useState({})
  const [status, setStatus] = useState('')
  const [error, setError] = useState()

  const isLoading = status === 'Fetching data...'
  const isSuccess = status === 'Fullført'
  const isError = status === 'Something went wrong'

  const router = useRouter()
  const weekId = router.query?.id as string

  useEffect(() => {
    const fetchWeek = async () => {
      setStatus('Fetching data...')
      try {
        if (!weekId) return
        const data = await getWeek(weekId)
        setWeek(data.data)
        setStatus('Fetch complete')
      } catch (error) {
        setError(error as any)
        setStatus('Something went wrong')
      }
    }
    fetchWeek()
  }, [weekId])

  if (isLoading) {
    return <h1>Henter ukeoversikt...</h1>
  }
  if (isError) {
    console.log(error)
    return <h1>Noe gikk galt...</h1>
  }

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
      <Override week={week} />
    </>
  )
}
export default Employee
