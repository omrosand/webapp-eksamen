import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getEmployee, putEmployee } from '../api/employees'

const Employee = () => {
  const [employee, setEmployee] = useState<any>({})
  const [inputName, setInputName] = useState('')
  const [data, setData] = useState({})

  const router = useRouter()
  const employeeId = router.query?.id as string

  useEffect(() => {
    const fetchEmployee = async () => {
      if (!employeeId) return
      const data = await getEmployee(employeeId)
      setEmployee(data.data)
    }
    fetchEmployee()
  }, [employeeId, data])

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
        <button type="submit">Endre</button>
      </form>
      <h2>Jobbdager: </h2>
      <section className="workDays">
        {employee.days?.length > 0 ? (
          employee.days?.map((day: any) => (
            <div className="workDayCard" key={day.id}>
              <h3>Uke {day.week.week}</h3>
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
