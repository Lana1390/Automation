import { bootMainPage } from './POMmainPage'

import { Page } from '@playwright/test'

export const mainPage = async ({ page }: { page: Page }) => {
	return new bootMainPage(page)
}
