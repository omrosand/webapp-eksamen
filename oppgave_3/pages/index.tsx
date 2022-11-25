import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getWeeks } from '../api/weeks'
import Nav from '../components/Nav'
import WeekList from '../components/WeekList'
import Weeks from '../components/Weeks'

const Home: NextPage = () => {
  const [data, setData] = useState({})
  const [weeks, setWeeks] = useState<any[]>([])

  useEffect(() => {
    const fetchWeeks = async () => {
      const data = await getWeeks({})
      setWeeks(data.data)
    }
    fetchWeeks()
  }, [data])

  return (
    <main>
      <Nav />
      <h1>Lunsjkalender</h1>
      <Weeks weeks={weeks} />
      <WeekList weeks={weeks} />
    </main>
  )
}

export default Home
