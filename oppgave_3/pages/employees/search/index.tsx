import type { NextPage } from 'next'
import Nav from '../../../components/Nav'
import SearchResult from '../../../components/SearchResult'

const SearchEmployees: NextPage = () => {
  return (
    <main>
      <Nav />
      <h1>Ansatt side</h1>
      <SearchResult />
    </main>
  )
}

export default SearchEmployees
