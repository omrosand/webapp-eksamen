export type Data = { success: true; data: Record<string, unknown> }
export type Error = { success: false; error: string }
export type Result = Data | Error

export type Employee = {
  id: string
  name: string
  rules: string
}
export type Day = {
  id: string
  name: string
  weekId: string
  employeeId: string
  employee: Employee
}
export type Week = {
  id: string
  week: number
  yearId: string
  year: Year
  days: Day[]
}
export type Year = {
  id: string
  weeks: Week[]
}
