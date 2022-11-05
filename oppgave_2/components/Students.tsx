import { useEffect, useState } from 'react'
import { getStudents } from '../api/students'

export default function Students() {
  const [option, setOption] = useState('ingen')
  const [data, setData] = useState([])
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

  const handleOptionChange = (e: any) => {
    console.log(e.target.value)
    setOption(e.target.value)
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
      <h2>Gruppering etter {option}:</h2>
      <ul>
        {data.map((student) => (
          <li key={student.id}>
            <span>{student.title}</span>
            <span>{student.age}</span>
            <span>{student.gender}</span>
            <span>{student.group}</span>
          </li>
        ))}
      </ul>
    </>
  )
}
