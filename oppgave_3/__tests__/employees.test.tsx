import { describe, expect, it, vi } from 'vitest'
import {render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Employees from '../pages/employees'

describe('EmployeeView', () => {
  it('should render EmployeeView', () => {
    render(
        <Employees />
    )
    expect(screen.queryByTestId('EmployeeView')).toBeInTheDocument()
  })

  it('should add Employees when pressing the button', () => {
    render(
        <Employees />
    )
    
  })
})
