import type { NextPage } from 'next'
import SearchResult from '../../../components/SearchResult'
import Nav from '../../../components/Nav'

const Employees: NextPage = () => {
  return (
    <main>
      <Nav />
      <SearchResult />
    </main>
  )
}

export default Employees
