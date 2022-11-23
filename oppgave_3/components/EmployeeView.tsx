import React, { useEffect, useState } from 'react'
import { getEmployees, postEmployee, putEmployee } from '../api/employees'

export default function EmployeeView() {
  const [status, setStatus] = useState('')
  const [name, setName] = useState('')
  const [newName, setNewName] = useState('')
  const [data, setData] = useState({})
  const [employeeList, setEmployeeList] = useState<any[]>([])
  const [error, setError] = useState({})

  const isLoading = status === 'Loading...'
  const isError = status === 'Error'
  const isSuccess = status === 'Success'

  useEffect(() => {
    const fetchEmployees = async () => {
      const data = await getEmployees({})
      setEmployeeList(data.data)
    }
    fetchEmployees()
  }, [data])

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    setStatus('Loading...')
    try {
      const result = await postEmployee({ name, rules: 'default rules' })
      setStatus('Success')
      setData(result)
    } catch (error) {
      setStatus('Error')
      setError(error as any)
      setTimeout(() => {
        setStatus('')
      }, 2000)
    }
  }
  const editName = async (e: any) => {
    const id = e.target.value
    console.log(e.target.id)
    const result = await putEmployee(id, newName)
    console.log(result)
  }

  if (isLoading) {
    return <p>Henter data ...</p>
  }

  if (isError) {
    return <p>Noe gikk galt ...</p>
  }

  return (
    <div className="wrapper">
      <p>Totalt {employeeList.length} ansatte.</p>
      <h2>Legg til ny ansatt</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">Legg til ansatt</button>
      </form>
      <ul>
        {employeeList.map((employee, index) => (
          <>
            <li key={employee.id}>
              {index + 1}. {employee.name}
            </li>
            <input
              type="text"
              value={newName}
              onChange={(event) => setNewName(event.target.value)}
            />
            <button type="submit" id={employee.id} onClick={editName}>
              Endre navn
            </button>
          </>
        ))}
      </ul>
    </div>
  )
}
