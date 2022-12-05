import Employees from '../../pages/employees/index'

describe('The Employees page', () => {
  it('mounts', () => {
    cy.mount(<Employees />)
  })
  it('successfully loads', () => {
    cy.visit('http://localhost:3000/employees') // change URL to match your URL
  })
})