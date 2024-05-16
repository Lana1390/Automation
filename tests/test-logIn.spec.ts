import { LogInPage } from '../pages/pageLogIn'
import { expect, test } from '@playwright/test'
import * as fs from 'fs'

const loginData = JSON.parse(fs.readFileSync('tests/utils/loginNData.json', 'utf8'))

test('logIn', async ({ page }) => {
	const pawLogInPage = new LogInPage(page)

	const loginData = JSON.parse(fs.readFileSync('tests/utils/loginData.json', 'utf8'))

	await pawLogInPage.goto()
	await pawLogInPage.gotoLogInButton()
	await pawLogInPage.fillEmail(loginData.email)
	await pawLogInPage.fillPassword(loginData.password)
	await pawLogInPage.gotosubmitButton()
	await pawLogInPage.chekLoggedIn()
	await pawLogInPage.gotoAvatarVisible()
})

test.describe('Login with invalid data', () => {
	for (const testData of loginData.slice(3, 9))
		test(`Login with invalid data': "${testData.email}" and password: "${testData.password}"`, async ({
			page,
		}) => {
			const pawLogInPage = new LogInPage(page)

			//console.log(`Testing input ${i + 1}: email: ${testData.email}, password: ${testData.password}`);
			await pawLogInPage.goto()
			await pawLogInPage.gotoLogInButton()
			await pawLogInPage.fillEmail(testData.email)
			await pawLogInPage.fillPassword(testData.password)

			//додати перевірку наявності помилки з правильним текстом "Надано невірні дані"
			await expect(pawLogInPage.avatarVisible).toBeHidden()
		})
})

test.describe('Login with empty data', () => {
	for (const testData of loginData.slice(0, 3)) {
		test(`testing Login with empty data: "${testData.email}" and password: "${testData.password}"`, async ({
			page,
		}) => {
			const pawLogInPage = new LogInPage(page)

			await pawLogInPage.goto()
			await pawLogInPage.gotoLogInButton()
			await pawLogInPage.fillEmail(testData.email)
			await pawLogInPage.fillPassword(testData.password)
			await expect(pawLogInPage.isSubmitButtonEnabled()).resolves.toBeFalsy()
			await expect(pawLogInPage.avatarVisible).toBeHidden()
		})
	}
})
