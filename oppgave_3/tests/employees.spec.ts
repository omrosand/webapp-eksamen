import { test, expect } from '@playwright/test';
import Employees from '../pages/employees';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/employees')
  });

test('Employee page has a working input field and button', async ({page}) => {
    
    await page.getByRole('textbox').fill('Turid')

    await page.getByRole('button').click()
})

test('Employee page has a list of employees', async ({page}) => {
    await page
})