import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getWeeks } from '../api/weeks'
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
      <h1>Lunsjkalender</h1>
      <Link href="/employees">Ansattliste</Link>
      <Weeks weeks={weeks} />
      <WeekList weeks={weeks} />
    </main>
  )
}

export default Home
