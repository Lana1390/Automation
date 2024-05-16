import { expect, type Locator, type Page } from '@playwright/test'

export class forumPage {
	readonly page: Page
	readonly forumTab: Locator
	readonly createNewTopic: Locator
	readonly titleInput: Locator
	readonly descriptionInput: Locator
	readonly categoriesTopic: Locator
	readonly categoryTopic: Locator
	readonly postButton: Locator
	readonly burgerMenu: Locator
	readonly forumButtonMob: Locator

	constructor(page: Page) {
		this.page = page
		this.forumTab = page.getByRole('banner').getByRole('link', { name: 'Обговорення' })
		this.createNewTopic = page.getByRole('button', { name: 'Нове обговорення +' })
		this.titleInput = page.getByPlaceholder('Введіть заголовок')
		this.descriptionInput = page.getByPlaceholder('Що ви хочете обговорити')
		this.categoriesTopic = page.locator('button').filter({ hasText: 'Оберіть варіант' })
		this.categoryTopic = page.getByRole('option', { name: 'Моя історія' })
		this.postButton = page.getByRole('button', { name: 'Опублікувати обговорення' })
		this.burgerMenu = page.getByRole('banner').getByRole('list').getByRole('button')
		this.forumButtonMob = page.getByRole('link', { name: 'Обговорення' })
	}

	async goto() {
		await this.page.goto('/')
	}

	async gotoForumPage() {
		await this.forumTab.click()
	}

	async gotoForumPageMob() {
		await this.burgerMenu.click()
		await this.forumButtonMob.click()
	}

	async gotoCreateNewTopic() {
		await this.createNewTopic.click()
		await this.page.waitForLoadState('networkidle')
		const textT = 'Topic title 1.'
		await this.titleInput.pressSequentially(textT)
		const textD = 'Topic description 1.'
		await this.descriptionInput.pressSequentially(textD)
		await this.categoriesTopic.click()
		await this.categoryTopic.click()
		await this.postButton.click()
		expect(this.page.getByRole('link', { name: textT }).isVisible())
	}
	async gotoTitleInput() {
		const textT = 'Topic title 1.'
		await this.titleInput.fill(textT)
	}

	async gotoDescriptionInput() {
		const textD = 'Topic description 1.'
		await this.descriptionInput.fill(textD)
	}

	async gotoPostTopic() {
		await this.postButton.isEnabled()
	}
}
