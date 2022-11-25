import type { NextPage } from 'next'
import Link from 'next/link'
import EmployeeView from '../../components/EmployeeView'

const Employees: NextPage = () => {
  return (
    <main>
      <h1>Ansatt oversikt</h1>
      <Link href="/">Forsiden</Link>
      <EmployeeView />
    </main>
  )
}

export default Employees
