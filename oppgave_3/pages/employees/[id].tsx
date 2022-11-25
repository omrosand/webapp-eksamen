import type { NextPage } from 'next'
import Employee from '../../components/Employee'
import Nav from '../../components/Nav'

const Employees: NextPage = () => {
  return (
    <main>
      <Nav />
      <h1>Ansatt side</h1>
      <Employee />
    </main>
  )
}

export default Employees
