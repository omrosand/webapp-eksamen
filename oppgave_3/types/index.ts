export type Data = { success: true; data: Record<string, unknown> }
export type Error = { success: false; error: string }

export type Result = Data | Error

export type Employee = {
  id: number
  name: string
  rules: string
}
export type Day = {
  name: string
  employee: Employee
}
export type Week = {
  number: number
  days: Day[]
}
