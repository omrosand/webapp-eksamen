import type { NextPage } from 'next'
import EmployeeView from '../components/EmployeeView'

const Employees: NextPage = () => {
  return (
    <main>
      <h1>Ansatt oversikt</h1>
      <EmployeeView />
    </main>
  )
}

export default Employees
