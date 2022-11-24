import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getEmployee, putEmployee } from '../api/employees'
import Link from 'next/link'

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
  }, [employeeId, inputName])

  const changeName = async (event: any) => {
    event.preventDefault()
    try {
      const result = await putEmployee({ id: employeeId, name: inputName })
      setData(result)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <button>
        <h3>
          <Link href="/employees">Tilbake til alle ansatte</Link>
        </h3>
      </button>
      <h1>{employee.name}</h1>
      <h2>ID: {employee.id}</h2>
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
