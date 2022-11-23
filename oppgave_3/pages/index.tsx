import type { NextPage } from 'next'
import WeekList from '../components/WeekList'
import Weeks from '../components/Weeks'

const Home: NextPage = () => {
  return (
    <main>
      <h1>Lunsjkalender</h1>
      <Weeks />
      <WeekList />
    </main>
  )
}

export default Home
