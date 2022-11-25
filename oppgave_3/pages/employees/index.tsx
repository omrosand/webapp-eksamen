import type { NextPage } from 'next'
import EmployeeView from '../../components/EmployeeView'
import Nav from '../../components/Nav'

const Employees: NextPage = () => {
  return (
    <main>
      <Nav />
      <h1>Ansatt oversikt</h1>
      <EmployeeView />
    </main>
  )
}

export default Employees
