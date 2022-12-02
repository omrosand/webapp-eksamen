import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getEmployee, putEmployee } from '../api/employees'
import Link from 'next/link'
import Button from './Button'

const Employee = () => {
  const [employee, setEmployee] = useState<any>({})
  const [inputName, setInputName] = useState('')
  const [data, setData] = useState({})
  const [status, setStatus] = useState('')
  const [error, setError] = useState()

  const isLoading = status === 'Fetching data...'
  const isSuccess = status === 'Fullført'
  const isError = status === 'Something went wrong'

  const router = useRouter()
  const employeeId = router.query?.id as string

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        if (!employeeId) return
        const data = await getEmployee(employeeId)
        setEmployee(data.data)
      } catch (error) {
        setError(error as any)
        setStatus('Something went wrong')
      }
    }
    fetchEmployee()
  }, [employeeId, employee])

  const changeName = async (event: any) => {
    event.preventDefault()
    try {
      const result = await putEmployee(employeeId, inputName)
      setData(result)
      setInputName('')
    } catch (error) {
      console.log(error)
    }
  }

  if (isLoading) {
    return <h1>Henter ukeoversikt...</h1>
  }
  if (isError) {
    console.log(error)
    return <h1>Noe gikk galt...</h1>
  }

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Name: </th>
            <td>{employee.name}</td>
          </tr>
          <tr>
            <th>Id: </th>
            <td>{employee.id}</td>
          </tr>
          <tr>
            <th>Antall jobbdager: </th>
            <td>{employee.days?.length}</td>
          </tr>
        </tbody>
      </table>
      <form className="editNameForm" onSubmit={changeName}>
        <label>Endre navn:</label>
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <Button title="Endre" />
      </form>
      <h2>Jobbdager: </h2>
      <section className="workDays">
        {employee.days?.length > 0 ? (
          employee.days?.map((day: any) => (
            <div className="workDayCard" key={day.id}>
              <Link
                key={day.week.id}
                href={{
                  pathname: `/weeks/${day.week.id}`,
                }}
              >
                <h3>Uke {day.week.week}</h3>
              </Link>
              <p>{day.name}</p>
            </div>
          ))
        ) : (
          <h3>{employee.name} har ingen lunsjvakter.</h3>
        )}
      </section>
    </>
  )
}
export default Employee
