import { Searching } from './POMmainPage'
import { Page } from '@playwright/test'

export const searchingTest = async ({ page }: { page: Page }) => {
	return new Searching(page)
}
