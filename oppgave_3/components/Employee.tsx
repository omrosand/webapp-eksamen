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
      <h2>{employee.name}</h2>
      <h3>ID: {employee.id}</h3>
      <p>Rules: {employee.rules}</p>
      <form onSubmit={changeName}>
        <label>Endre navn:</label>
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <button type="submit">Endre</button>
      </form>
    </>
  )
}
export default Employee
