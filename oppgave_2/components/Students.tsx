import { useEffect, useState } from 'react'
import { getStudents } from '../api/students'
import Filter from './Filter'
import { Student } from '../types'

export default function Students() {
  const [data, setData] = useState<Student[]>([])
  const [option, setOption] = useState('ingen')
  const [status, setStatus] = useState('')
  const [error, setError] = useState({})

  const isLoading = status === 'loading'
  const isError = status === 'error'

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
  let groupedData: { [key: string]: Student[] } = {}

  if (option === 'ingen') {
    data.sort(function (a: any, b: any) {
      if (a.title < b.title) {
        return -1
      }
      if (a.title > b.title) {
        return 1
      }
      return 0
    })
    groupedData = {
      ingen: data,
    }
  }
  if (option === 'alder') {
    groupedData = data.reduce(groupByProperty('age'), {})
  }
  if (option === 'kjonn') {
    groupedData = data.reduce(groupByProperty('gender'), {})
  }
  if (option === 'klasse') {
    groupedData = data.reduce(groupByProperty('group'), {})
  }

  return (
    <>
      <Filter setOption={setOption} />
      {Object.entries(groupedData).map(([key, value]: [string, Student[]]) => (
        <>
          {option !== 'ingen' ? (
            <h2>
              Gruppering etter {option}: {key}
            </h2>
          ) : null}
          <ul>
            {value.map((student: Student) => (
              <li key={student.id}>
                <span>{student.id}</span>
                <span>{student.title}</span>
                <span>{student.age}</span>
                <span>{student.gender}</span>
                <span>{student.group}</span>
              </li>
            ))}{' '}
            <p className="count">Antall: {value.length}</p>
          </ul>
        </>
      ))}
    </>
  )
}

function groupByProperty(property: keyof Student) {
  return function (result: { [key: string]: Student[] }, student: Student) {
    let studentPropertyValue = student[property] && student[property].toString()
    result[studentPropertyValue] = result[studentPropertyValue] || []
    result[studentPropertyValue].push(student)
    return result
  }
}
