import type { NextPage } from 'next'
import EmployeeView from '../../components/EmployeeView'
import Nav from '../../components/Nav'
import Title from '../../components/Title'

const Employees: NextPage = () => {
  return (
    <main>
      <Nav />
      <Title title="Ansatt oversikt" Tag="h1" />
      <EmployeeView />
    </main>
  )
}

export default Employees
