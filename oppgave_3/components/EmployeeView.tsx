import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getEmployees, postEmployee, putEmployee } from '../api/employees'
import Button from './Button'
import Title from './Title'

export default function EmployeeView() {
  const [status, setStatus] = useState('')
  const [name, setName] = useState('')
  const [data, setData] = useState({})
  const [employeeList, setEmployeeList] = useState<any[]>([])
  const [error, setError] = useState({})

  const isLoading = status === 'Fetching data...'
  const isSuccess = status === 'Fullført'
  const isError = status === 'Something went wrong'

  useEffect(() => {
    const fetchEmployees = async () => {
      const data = await getEmployees({})
      setEmployeeList(data.data)
    }
    fetchEmployees()
  }, [data])

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    setStatus('Fetching data...')
    try {
      const result = await postEmployee({ name, rules: 'default rules' })
      setStatus('Fullført')
      setData(result)
      setName('')
    } catch (error) {
      setStatus('Something went wrong')
      setError(error as any)
      setTimeout(() => {
        setStatus('')
      }, 2000)
    }
  }

  if (isLoading) {
    return <Title title="Henter ansattoversikt..." Tag="h1" />
  }
  if (isError) {
    return <Title title="Noe gikk galt..." Tag="h1" />
  }

  return (
    <div className="wrapper">
      <p>Totalt {employeeList.length} ansatte.</p>
      <Title title="Legg til ny ansatt" Tag="h2" />
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
