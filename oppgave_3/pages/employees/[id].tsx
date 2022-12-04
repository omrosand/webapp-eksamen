import type { NextPage } from 'next'
import Employee from '../../components/Employee'
import Nav from '../../components/Nav'
import Title from '../../components/Title'

const Employees: NextPage = () => {
  return (
    <main>
      <Nav />
      <Title title="Ansatt side" Tag="h1" />
      <Employee />
    </main>
  )
}

export default Employees
