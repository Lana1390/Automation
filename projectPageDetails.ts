import { expect, type Locator, type Page } from '@playwright/test'

export class MainProjectPage {
	readonly page: Page
	readonly descTableLocator: Locator
	readonly vacancyTableLocator: Locator
	readonly participantsTabLocator: Locator
	readonly newsTabLocator: Locator
	readonly commentsTabLocator: Locator
	readonly fundraisingTabLocator: Locator
	readonly faqTabLocator: Locator
	readonly projectTitleLocator: Locator
	readonly projectTitleLocator2: Locator
	readonly projectDescriptionLocator: Locator
	readonly noNewsMessageLocator: Locator
	readonly commentsTabContentLocator: Locator
	readonly fundraisingTabContentLocator: Locator
	readonly memberProject1: Locator
	readonly memberProject2: Locator
	readonly likesCountLocator: Locator
	readonly dislikesCountLocator: Locator
	readonly likeButtonLocator: Locator
	readonly dislikeButtonLocator: Locator
	readonly changedlikesCountLocator: Locator
	readonly changeddislikesCountLocator: Locator
	readonly saveProjectButtonLocator: Locator
	readonly authRequiredMessageLocator: Locator
	readonly loginButtonLocator: Locator
	readonly registerButtonLocator: Locator
	readonly closeButtonLocator: Locator
	readonly userProfileLinkLocator: Locator
	readonly loginHeadingLocator: Locator
	readonly projectLinkLocator: Locator
	readonly projectHeadingLocator: Locator
	readonly projectHeadingLocator2: Locator
	readonly projectDateLocator: Locator
	readonly projectIdeaLocator: Locator
	readonly projectIdeaLocator2: Locator
	readonly projectImageLocator: Locator
	readonly projectImageLocator2: Locator
	readonly projectCategoryLocator: Locator
	readonly projectRecruittingMessageLocator: Locator
	readonly projectStatusMessageLocator: Locator
	readonly editButtonLocator: Locator
	readonly settingsTabLocator: Locator
	readonly descriptionTabLocator: Locator
	readonly visitorCardTabLocator: Locator
	readonly vacanciesLinkLocator: Locator
	readonly newsLinkLocator: Locator
	readonly faqLinkLocator: Locator
	readonly participantsLinkLocator: Locator
	readonly fundraisingLinkLocator: Locator
	readonly saveProjectButtonLocator2: Locator
	readonly removeFromSavedButtonLocator: Locator

	public constructor(page: Page) {
		this.page = page
		this.descTableLocator = page.getByRole('tab', { name: 'Опис' })
		this.vacancyTableLocator = page.getByRole('tab', { name: 'Вакансії' })
		this.participantsTabLocator = page.getByRole('tab', { name: 'Учасники проєкту' })
		this.newsTabLocator = page.getByRole('tab', { name: 'Новини' })
		this.commentsTabLocator = page.getByRole('tab', { name: 'Коментарі' })
		this.fundraisingTabLocator = page.getByRole('tab', { name: 'Збір коштів' })
		this.faqTabLocator = page.getByRole('tab', { name: 'FAQ' })
		this.projectTitleLocator = page.getByText('Test title project1')
		this.projectTitleLocator2 = page.getByText('Test title project2')
		this.projectDescriptionLocator = page.getByText('ASdadas adasdasdasdASdadasd')
		this.noNewsMessageLocator = page.getByText('Поки ще немає жодної новини')
		this.commentsTabContentLocator = page.getByText('comments tab')
		this.fundraisingTabContentLocator = page.getByText('collections tab')
		this.memberProject1 = page.getByRole('link', { name: 'Project1 by User1 project' })
		this.memberProject2 = page.getByRole('link', { name: 'Project2 by User2 project' })
		this.likesCountLocator = page.locator('label').filter({ hasText: '132' })
		this.dislikesCountLocator = page.locator('label').filter({ hasText: '15' })
		this.likeButtonLocator = page.locator('#icon-like-regular')
		this.dislikeButtonLocator = page.locator('#icon-dislike-regular')
		this.changedlikesCountLocator = page.locator('label').filter({ hasText: '133' })
		this.changeddislikesCountLocator = page.locator('label').filter({ hasText: '16' })
		this.saveProjectButtonLocator = page.getByTitle('Зберегти проєкт')
		this.authRequiredMessageLocator = page.getByText(
			'Для даної дії необхідно авторизуватися на сайті'
		)
		this.loginButtonLocator = page.getByRole('button', { name: 'Увійти в аккаунт' })
		this.registerButtonLocator = page.getByRole('button', { name: 'Зареєструватися' })
		this.closeButtonLocator = page.getByRole('button', { name: 'Close' })
		this.userProfileLinkLocator = page.getByRole('link', { name: 'UE UserOne EnoResu' })
		this.loginHeadingLocator = page.getByRole('heading', { name: 'Вхід' })
		this.projectLinkLocator = page.getByRole('link', { name: 'Project1 by User1 project' })
		this.projectHeadingLocator = page.getByRole('heading', { name: 'Project1 by User1' })
		this.projectHeadingLocator2 = page.getByRole('heading', { name: 'Project2 by User2' })
		this.projectDateLocator = page.getByText('.24')
		this.projectIdeaLocator = page.getByText('idea of project1')
		this.projectIdeaLocator2 = page.getByText('idea of project2')
		this.projectImageLocator = page.getByRole('img', { name: 'Project1 by User1 project' })
		this.projectImageLocator2 = page.getByRole('img', { name: 'Project2 by User2 project' })
		this.projectCategoryLocator = page.getByText('E-commerce')
		this.projectRecruittingMessageLocator = page
			.locator('div')
			.filter({ hasText: /^Збираємо команду$/ })
		this.projectStatusMessageLocator = page.locator('div').filter({ hasText: /^В розробці$/ })
		this.editButtonLocator = page.getByRole('button', { name: 'Редагувати' })
		this.settingsTabLocator = page.getByRole('tab', { name: 'Налаштування' })
		this.descriptionTabLocator = page.getByRole('tab', { name: 'Опис' })
		this.visitorCardTabLocator = page.getByRole('tab', { name: 'Візитівка' })
		this.vacanciesLinkLocator = page.getByRole('main').getByRole('link', { name: 'Вакансії' })
		this.newsLinkLocator = page.getByRole('main').getByRole('link', { name: 'Новини' })
		this.faqLinkLocator = page.getByRole('link', { name: 'FAQ' })
		this.participantsLinkLocator = page.getByRole('main').getByRole('link', { name: 'Учасники' })
		this.fundraisingLinkLocator = page.getByRole('link', { name: 'Збір коштів' })
		this.saveProjectButtonLocator2 = page.getByRole('button', { name: 'Зберегти проєкт' })
		this.removeFromSavedButtonLocator = page.getByRole('button', {
			name: 'Видалити проєкт зі збережених',
		})
	}

	async visit() {
		await this.page.goto('')
		await this.memberProject1.click()
	}

	async checkTabs() {
		await this.descTableLocator.click()
		await expect(this.projectTitleLocator).toBeVisible()
		await expect(this.projectDescriptionLocator).toBeVisible()

		await this.vacancyTableLocator.click()

		await this.participantsTabLocator.click()

		await this.newsTabLocator.click()
		await expect(this.noNewsMessageLocator).toBeVisible()

		await this.commentsTabLocator.click()
		await expect(this.commentsTabContentLocator).toBeVisible()

		await this.fundraisingTabLocator.click()
		await expect(this.fundraisingTabContentLocator).toBeVisible()

		await this.faqTabLocator.click()
	}

	async checkTabsfor56() {
		await this.descTableLocator.click()
		await expect(this.projectTitleLocator2).toBeVisible()
		await expect(this.projectDescriptionLocator).toBeVisible()

		await this.vacancyTableLocator.click()

		await this.participantsTabLocator.click()

		await this.newsTabLocator.click()
		await expect(this.noNewsMessageLocator).toBeVisible()

		await this.commentsTabLocator.click()
		await expect(this.commentsTabContentLocator).toBeVisible()

		await this.fundraisingTabLocator.click()
		await expect(this.fundraisingTabContentLocator).toBeVisible()

		await this.faqTabLocator.click()

		await expect(this.projectHeadingLocator2).toBeVisible()
		await expect(this.projectDateLocator).toBeVisible()
		await expect(this.projectIdeaLocator2).toBeVisible()
		await expect(this.projectImageLocator2).toBeVisible()
		await expect(this.projectCategoryLocator).toBeVisible()
		await expect(this.projectStatusMessageLocator).toBeVisible()
	}

	async checkLikeDislikeButton() {
		await expect(this.likesCountLocator).toBeVisible()
		await expect(this.dislikesCountLocator).toBeVisible()

		await this.likeButtonLocator.click()
		await expect(this.changedlikesCountLocator).toBeVisible()

		await this.dislikeButtonLocator.click()
		await expect(this.changeddislikesCountLocator).toBeVisible()
	}

	async checkLikeDislikeButtonAnonym() {
		await expect(this.likesCountLocator).toBeVisible()
		await expect(this.dislikesCountLocator).toBeVisible()

		await this.likeButtonLocator.click()
		await expect(this.authRequiredMessageLocator).toBeVisible()
		await expect(this.loginButtonLocator).toBeVisible()
		await expect(this.registerButtonLocator).toBeVisible()
		await this.closeButtonLocator.click()
	}

	async testSaveProjectAuthRequiredAnonym() {
		await this.saveProjectButtonLocator.click()
		await expect(this.authRequiredMessageLocator).toBeVisible()
		await expect(this.loginButtonLocator).toBeVisible()
		await expect(this.registerButtonLocator).toBeVisible()
		await this.closeButtonLocator.click()
		await this.userProfileLinkLocator.click()
		await expect(this.loginHeadingLocator).toBeVisible()
	}

	async testProjectDetails() {
		await this.projectLinkLocator.click()
		await expect(this.projectHeadingLocator).toBeVisible()
		await expect(this.projectDateLocator).toBeVisible()
		await expect(this.projectIdeaLocator).toBeVisible()
		await expect(this.projectImageLocator).toBeVisible()
		await expect(this.projectCategoryLocator).toBeVisible()
		await expect(this.projectRecruittingMessageLocator).toBeVisible()
	}
	async testProjectEdit() {
		await this.editButtonLocator.click()
		await this.settingsTabLocator.click()
		await this.descriptionTabLocator.click()
		await this.visitorCardTabLocator.click()
		await this.vacanciesLinkLocator.click()
		await this.newsLinkLocator.click()
		await this.faqLinkLocator.click()
		await expect(this.participantsLinkLocator).toBeVisible()
		await expect(this.newsLinkLocator).toBeVisible()
		await expect(this.fundraisingLinkLocator).toBeVisible()
		await this.page.goto('/projects/1?id=1')
	}

	async navigateToProject() {
		await this.page.goto(`/projects/3?id=3`)
		await this.page.waitForTimeout(1500)
	}
	async testSavingAndRemovingProject() {
		await this.saveProjectButtonLocator.click()
		await this.page.waitForTimeout(1500)
		await expect(this.removeFromSavedButtonLocator).toBeVisible()

		await this.removeFromSavedButtonLocator.click()
		await expect(this.saveProjectButtonLocator2).toBeVisible()
	}
}
