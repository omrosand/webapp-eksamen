import type { NextPage } from 'next'
import Nav from '../../components/Nav'
import Override from '../../components/Override'
import Week from '../../components/Week'

const Weeks: NextPage = () => {
  return (
    <main>
      <Nav />
      <Week />
    </main>
  )
}

export default Weeks
