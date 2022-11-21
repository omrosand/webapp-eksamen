import React, { useEffect, useState } from 'react'
import { getEmployees, postEmployee, putEmployee } from '../api/employees'

export default function EmployeeView() {
  const [status, setStatus] = useState('')
  const [name, setName] = useState('')
  const [updateName, setUpdateName] = useState('')
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
  const editName = (e: any) => {
    console.log(e.target.id)
  }

  if (isLoading) {
    return <p>Henter data ...</p>
  }

  if (isError) {
    return <p>Noe gikk galt ...</p>
  }

  return (
    <div className="wrapper">
      {isSuccess ? (
        <h2>{name} er lagt til som ansatt</h2>
      ) : (
        <h2>Legg til ansatt</h2>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">Legg til ansatt</button>
      </form>
      <ul>
        {employeeList.map((employee) => (
          <>
            <li key={employee.id}>
              {employee.name}
              <button type="submit" id={employee.id} onClick={editName}>
                Endre navn
              </button>
            </li>
          </>
        ))}
      </ul>
    </div>
  )
}
