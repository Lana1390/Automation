import { type Locator, type Page } from '@playwright/test'

export class forumPage {
	readonly page: Page
	readonly forumTab: Locator
	readonly titleInput: Locator
	readonly descriptionInput: Locator
	readonly postButton: Locator
	readonly burgerMenu: Locator
	readonly forumButtonMob: Locator

	constructor(page: Page) {
		this.page = page
		this.forumTab = page.getByRole('banner').getByRole('link', { name: 'Обговорення' })
		this.titleInput = page.getByPlaceholder('Title')
		this.descriptionInput = page.getByPlaceholder('Description')
		this.postButton = page.getByRole('button', { name: 'Post' })
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
