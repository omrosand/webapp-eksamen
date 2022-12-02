import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getEmployees, postEmployee, putEmployee } from '../api/employees'
import Button from './Button'

export default function EmployeeView() {
  const [status, setStatus] = useState('')
  const [name, setName] = useState('')
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
      setName('')
    } catch (error) {
      setStatus('Error')
      setError(error as any)
      setTimeout(() => {
        setStatus('')
      }, 2000)
    }
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
        <Button title="Legg til ansatt" />
      </form>
      <ul className="employees">
        {employeeList.map((employee, index) => (
          <div className="employee" key={employee.id}>
            <li>
              {index + 1}. {employee.name}
            </li>
            <Link
              href={{
                pathname: `/employees/${employee.id}`,
              }}
            >
              Gå til ansatt
            </Link>
          </div>
        ))}
      </ul>
    </div>
  )
}
