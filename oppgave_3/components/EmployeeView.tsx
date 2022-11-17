import { useState } from 'react'

const Employees = () => {
  const [name, setName] = useState('')

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const response = await fetch('api/employees', {
      method: 'post',
      body: JSON.stringify({
        id: '',
        name,
        rules: 'none',
      }),
    })
    const result = await response.json()
    console.log(result)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(name)} type="text" />
      <button type="submit">Legg til ansatt</button>
    </form>
  )
}
export default Employees
