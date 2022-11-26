import type { NextPage } from 'next'
import Nav from '../../../components/Nav'
import SearchResult from '../../../components/SearchResult'

const SearchEmployees: NextPage = () => {
  return (
    <main>
      <Nav />
      <SearchResult />
    </main>
  )
}

export default SearchEmployees
