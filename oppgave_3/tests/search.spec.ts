import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/employees/search')
})

test('Search page writes out name of Employee when searched', async ({
  page,
}) => {
  await page.getByRole('textbox').fill('Trude')
  await page.locator('form').getByRole('button', { name: 'Søk' }).click()
  await expect(page.getByRole('link', { name: 'Trude' })).toHaveText('Trude')
})

test('Search page writes out Antall: 1 when an employee is found', async ({
  page,
}) => {
  await page.getByRole('textbox').fill('Trude')
  await page.locator('form').getByRole('button', { name: 'Søk' }).click()
  await expect(page.getByRole('heading', { name: 'Antall: 1' })).toHaveText(
    'Antall: 1'
  )
})

test('Search page will remove search when pressing "Nullstill søk"-button', async ({
  page,
}) => {
  await page.getByRole('button', { name: 'Nullstill søk' }).click()
  await expect(page.getByRole('heading', { name: 'Antall: 0' })).toHaveText(
    'Antall: 0'
  )
})

test('Search page will return nothing if name is not in list', async ({
  page,
}) => {
  await page.getByRole('textbox').fill('Karl')
  await page.locator('form').getByRole('button', { name: 'Søk' }).click()
  await expect(page.getByRole('heading', { name: 'Antall: 0' })).toHaveText(
    'Antall: 0'
  )
})
