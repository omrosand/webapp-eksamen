import React, { useState } from 'react'
import { postEmployee } from '../api/employees'

export default function EmployeeView() {
  const [status, setStatus] = useState('')
  const [name, setName] = useState('')
  const [data, setData] = useState({})
  const [error, setError] = useState({})

  const isLoading = status === 'Loading...'
  const isError = status === 'Error'
  const isSuccess = status === 'Success'

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
      <p>Data: {JSON.stringify(data)}</p>
      <p>Error: {JSON.stringify(error)}</p>
    </div>
  )
}
