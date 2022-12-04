import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { postOverride } from '../api/overrides'
import Button from './Button'
import Title from './Title'

const Override = ({ week }: any) => {
  const [day, setDay] = useState('Mandag')
  const [employee, setEmployee] = useState('')

  const router = useRouter()
  const weekId = router.query?.id as string

  const handleSelectChange = (e: any) => {
    setDay(e.target.value)
  }

  const handleInputChange = (e: any) => {
    setEmployee(e.target.value)
  }

  const overrideDay = async (e: any) => {
    e.preventDefault()
    try {
      const result = await postOverride(weekId, {
        day: day,
        employee: employee,
      })
      setEmployee('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Title title="Overskrivelser:" Tag="h2" />
      <form onSubmit={overrideDay}>
        <select onChange={handleSelectChange} defaultValue="Mandag">
          <option value="Mandag">Mandag</option>
          <option value="Tirsdag">Tirsdag</option>
          <option value="Onsdag">Onsdag</option>
          <option value="Torsdag">Torsdag</option>
          <option value="Fredag">Fredag</option>
        </select>
        <label htmlFor="overskrevetAnsatt"> Navn: </label>
        <input
          type="text"
          id="overskrevetAnsatt"
          value={employee}
          onChange={handleInputChange}
        />
        <Button title="Endre" />
      </form>
      <ul>
        {week.override?.length > 0
          ? week.override.map((day: any) => (
              <li key={day.id}>
                {day.employee} tar over lunsjvakt på {day.day}
              </li>
            ))
          : null}
      </ul>
    </>
  )
}
export default Override
