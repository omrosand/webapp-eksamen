import type { NextPage } from 'next'
import Link from 'next/link'
import WeekList from '../components/WeekList'
import Weeks from '../components/Weeks'

const Home: NextPage = () => {
  return (
    <main>
      <h1>Lunsjkalender</h1>
      <Link href="/employees">Ansattliste</Link>
      <Weeks />
      <WeekList />
    </main>
  )
}

export default Home
