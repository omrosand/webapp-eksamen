import EmployeeView from '../../components/EmployeeView'
import Employees from '../../pages/employees/index'

describe('The Employees page', () => {
  it('mounts', () => {
    cy.mount(<Employees />)
  })

  // it('successfully loads', () => {
  //   cy.visit('http://localhost:3000/employees')
  // })
  
  // it('has a functional input field'), () => {
  //   cy.mount(<Employees />)
  //   cy.get('input-field').type('Turid')
  // }

  // it('has a clickable button', () => {
  //   cy.mount(<EmployeeView />)
  //   cy.get('.appButton').click()
  // })
  
  // it('lists all employees'), () => {
  //   cy.mount(<Employees />)
    
  // }

  // it('renders Gå til ansatt link', () => {
  //   cy.mount(<Employees />)
  //   cy.get('Link').contains('Gå til ansatt')
  // })

  // it('has a form to submit new employees'), () => {
  //   cy.mount(<Employees />)
  //   cy.intercept('POST', 'api/employees')
  //   cy.get('form').submit()
  // }
})