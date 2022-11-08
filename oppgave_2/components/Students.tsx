import { useEffect, useState } from 'react'
import { getStudents } from '../api/students'

type Student = {
  id: string
  title: string
  gender: string
  age: number
  group: string
}

export default function Students() {
  const [option, setOption] = useState('ingen')
  const [data, setData] = useState<Student[]>([])
  const [status, setStatus] = useState('')
  const [error, setError] = useState({})

  const isLoading = status === 'loading'
  const isError = status === 'error'
  const isSuccess = status === 'success'

  useEffect(() => {
    const handler = async () => {
      setStatus('loading')
      try {
        const result = await getStudents({})
        setStatus('success')
        setData(result.data)
      } catch (error) {
        setStatus('error')
        setError(error as any)
        setTimeout(() => {
          setStatus('')
        }, 2000)
      }
    }
    handler()
  }, [])

  if (isLoading) {
    return <h2>Laster innhold...</h2>
  }
  if (isError) {
    return <h2>Noe gikk galt</h2>
  }

  // Hvis option er 'ingen' - sorter alfabetisk på navn
  if (option === 'ingen') {
    data.sort(function (a, b) {
      if (a.title < b.title) {
        return -1
      }
      if (a.title > b.title) {
        return 1
      }
      return 0
    })
  }

  const handleOptionChange = (e: any) => {
    console.log(e.target.value)
    setOption(e.target.value)
  }
  let groupedData: { [x: string]: Student[] } = {}

  if (option === 'alder') {
    groupedData = data.reduce(groupByProperty('age'), Object.create(null))
    // console.log(groupedData)
  }
  if (option === 'kjonn') {
    groupedData = data.reduce(groupByProperty('gender'), Object.create(null))
    // console.log(groupedData)
  }
  if (option === 'klasse') {
    groupedData = data.reduce(groupByProperty('group'), Object.create(null))
    // console.log(groupedData)
  }

  return (
    <>
      <form>
        <section>
          <label htmlFor="ingen">Ingen</label>
          <input
            type="radio"
            id="ingen"
            name="kategori"
            value="ingen"
            onClick={handleOptionChange}
          />
          <label htmlFor="alder">Alder</label>
          <input
            type="radio"
            id="alder"
            name="kategori"
            value="alder"
            onClick={handleOptionChange}
          />
          <label htmlFor="kjonn">Kjønn</label>
          <input
            type="radio"
            id="kjonn"
            name="kategori"
            value="kjonn"
            onClick={handleOptionChange}
          />
          <label htmlFor="klasse">Klasse</label>
          <input
            type="radio"
            id="klasse"
            name="kategori"
            value="klasse"
            onClick={handleOptionChange}
          />
        </section>
      </form>
      {Object.entries(groupedData).map(([key, value]: [string, Student[]]) => (
        <>
          <h2>
            Gruppering etter {option}: {key}
          </h2>
          <ul>
            {value.map((student: Student) => (
              <li key={student.id}>
                <span>{student.id}</span>
                <span>{student.title}</span>
                <span>{student.age}</span>
                <span>{student.gender}</span>
                <span>{student.group}</span>
              </li>
            ))}
          </ul>
          <p className="count">Antall: {value.length}</p>
        </>
      ))}
    </>
  )
  function groupByProperty(property: keyof Student) {
    return function (result: { [key: string]: Student[] }, entry: Student) {
      let studentPropertyValue = entry[property] && entry[property].toString()
      result[studentPropertyValue] = result[studentPropertyValue] || []
      result[studentPropertyValue].push(entry)
      return result
    }
  }
}
