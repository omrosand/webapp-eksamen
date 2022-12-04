import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { searchEmployee } from '../api/employees'
import Button from './Button'

const SearchResult = () => {
  const [employeeList, setEmployeeList] = useState<any>([])
  const [inputQuery, setInputQuery] = useState('')
  const [inputName, setInputName] = useState('')
  const [data, setData] = useState({})
  const [status, setStatus] = useState('')
  const [error, setError] = useState()

  const isLoading = status === 'Fetching data...'
  const isSuccess = status === 'Fullført'
  const isError = status === 'Something went wrong'

  const router = useRouter()
  const query = router.query?.id as string

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        if (!query) return
        const data = await searchEmployee(query)
        setEmployeeList(data.data)
      } catch (error) {
        setError(error as any)
        setStatus('Something went wrong')
      }
    }
    fetchEmployee()
  }, [query])
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Finn ansatt: </label>
        <input
          onChange={(e) => setInputQuery(e.target.value)}
          value={inputQuery}
          type="text"
        />
        <Link href={{ pathname: `/employees/search/${inputQuery}` }}>
          <Button onClick={() => setInputQuery('')} title="Søk" />
        </Link>
      </form>
      <h1>Ansatte som matcher søk:</h1>
      <h2>Antall: {employeeList.length}</h2>
      <ul className="searchedEmployees">
        {employeeList.map((person: any) => (
          <li key={person.id}>
            <Link href={`/employees/${person.id}`}>{person.name}</Link>
          </li>
        ))}
      </ul>
      <Button title="Nullstill søk" onClick={() => setEmployeeList([])} />
    </>
  )
}
export default SearchResult
