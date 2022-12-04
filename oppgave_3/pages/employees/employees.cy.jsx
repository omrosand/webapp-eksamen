import Employees from '../../pages/employees/index'

describe('Employees.cy.ts', () => {
  it('mounts', () => {
    cy.mount(Employees)
  })
})