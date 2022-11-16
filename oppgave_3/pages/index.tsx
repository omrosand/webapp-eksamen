import type { NextPage } from 'next'
import Weeks from '../components/Weeks'

const Home: NextPage = () => {
  return (
    <main>
      <h1>Lunsjkalender</h1>
      <Weeks />
    </main>
  )
}

export default Home
