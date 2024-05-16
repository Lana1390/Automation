import { LogInPage } from './logIn'

import { Page } from '@playwright/test'
import * as fs from 'fs'

export const pawLogIn = async ({ page }: { page: Page }) => {
	const loginPage = new LogInPage(page)

	const loginData = JSON.parse(fs.readFileSync('tests/utils/loginData.json', 'utf8'))

	await loginPage.login(loginData.email, loginData.password)

	return loginPage
}
