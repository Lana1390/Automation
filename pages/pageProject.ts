import { expect, type Locator, type Page } from '@playwright/test'

type DateString = string

export class projectPage {
	readonly page: Page
	readonly avatar: Locator
	readonly projectsButton: Locator
	readonly createProjectButton: Locator
	readonly memberProject1: Locator
	readonly memberProject3: Locator
	readonly projectEditButton: Locator
	readonly mobileBurgerMenu: Locator
	readonly mobileCreateProjectButton: Locator
	readonly tabCard: Locator
	readonly hint: Locator
	readonly coverField: Locator
	readonly projectName: Locator
	readonly projectIdea: Locator
	readonly projectCategoryNames: Locator
	readonly projectCategoryName: Locator
	readonly nextButton: Locator
	readonly tabDescription: Locator
	readonly hintDescription: Locator
	readonly descriptionCard: Locator
	readonly settingsTab: Locator
	readonly hintSettingsDate: Locator
	readonly hintSettingsStatus: Locator
	readonly hintSettingsComment: Locator
	readonly startDate: Locator
	readonly completionDate: Locator
	readonly stageStartDate: Locator
	readonly stageCompletionDate: Locator
	readonly ProjectStatuses: Locator
	readonly ProjectStatus: Locator
	readonly hideComments: Locator
	readonly selectHideComments: Locator
	readonly publishProject: Locator
	readonly removeProject: Locator
	readonly reviewImage: Locator

	constructor(page: Page) {
		this.page = page
		this.avatar = page.locator('button[aria-haspopup="menu"][class*="flex items-center gap-x-2"]')
		this.projectsButton = page.getByRole('menuitem', { name: 'Проєкти' })
		this.createProjectButton = page.getByRole('button', { name: 'Створити новий проєкт' })
		this.memberProject1 = page.getByRole('link', { name: 'Project1 by User1 project' })
		this.memberProject3 = page.getByRole('link', { name: 'Project3 by User1 project' })
		this.projectEditButton = page.getByRole('link', { name: 'Редагувати' })
		this.mobileBurgerMenu = page.getByRole('main').getByRole('button')
		this.mobileCreateProjectButton = page.locator('button.inline-flex.items-center.justify-center')
		this.tabCard = page.getByRole('tab', { name: 'Візитівка' })
		this.coverField = page.locator('input[type="file"][accept="image/*"]')
		this.hint = page.locator('[class = "flex flex-col gap-y-8"]').getByText('Вкажіть назву')
		this.projectName = page.getByPlaceholder('Введіть назву')
		this.projectIdea = page.getByPlaceholder('Короткий опис')
		this.projectCategoryNames = page.getByLabel('Категорія проєкту*')
		this.projectCategoryName = page.getByLabel('Для дітей').getByText('Для дітей')
		this.nextButton = page.getByRole('button', { name: 'Далі' })
		this.tabDescription = page.getByRole('tab', { name: 'Опис' })
		this.hintDescription = page.getByText('Розкажіть більше про ваш проєкт.')
		this.descriptionCard = page.locator('.tiptap')
		this.settingsTab = page.getByRole('tab', { name: 'Налаштування' })
		this.hintSettingsDate = page.getByText('Будь ласка, вкажіть очікувані строки')
		this.hintSettingsStatus = page.getByText('Оберіть поточний етап проєкту')
		this.hintSettingsComment = page.getByText('Коментування проєктів')
		this.startDate = page.getByLabel('Очікувана дата початку роботи')
		this.completionDate = page.getByLabel('Очікувана дата завершення проєкту')
		this.ProjectStatuses = page.getByLabel('Етап проєкту*')
		this.ProjectStatus = page.getByLabel('Збираємо команду')
		this.stageStartDate = page.getByLabel('Дата початку етапу')
		this.stageCompletionDate = page.getByLabel('Очікувана дата завершення етапу')
		this.hideComments = page.locator('div').filter({ hasText: /^Сховати коментарі$/ })
		this.selectHideComments = page.getByRole('checkbox')
		this.publishProject = page.getByRole('button', { name: 'Опублікувати зміни' })
		this.removeProject = page.locator('ul').filter({ hasText: 'Зняти з публікації' })
		this.reviewImage = page.getByRole('img', { name: 'image-' })
	}

	async gotoProjectsPage() {
		const responsePromise = this.page.waitForRequest('**')
		await this.page.goto('/profile')
		await responsePromise
		await this.avatar.isVisible()
		await this.avatar.isEnabled()
		await this.avatar.click()
		await this.projectsButton.click()
	}

	async gotoCreateProject() {
		await this.createProjectButton.click()
	}

	async gotoMemberProject1() {
		await this.memberProject1.click()
	}

	async gotoMemberProject3() {
		await this.memberProject3.click()
	}

	async gotoProjectEditButton() {
		await this.projectEditButton.click()
	}

	async gotoTabCard() {
		await this.tabCard.isVisible()
	}

	async checkHint() {
		await this.hint.isVisible()
	}

	async gotoCoverFieldPng() {
		const imagePath = 'tests/utils/Screen.png'
		await this.coverField.isEnabled()
		await this.coverField.setInputFiles(imagePath)
		const imgPng = this.page.locator('[src*="data:image/png"]')
		await expect(imgPng).toBeVisible()
	}

	async gotoReviewvPng() {
		const imgPng = this.reviewImage
		await expect(imgPng).toBeVisible()
	}

	async gotoCoverFieldJpeg() {
		const imagePath = 'tests/utils/scale_2400.jpeg'
		await this.coverField.isEnabled()
		await this.coverField.setInputFiles(imagePath)
	}

	async gotoProjectName(type: string) {
		await this.projectName.isVisible()
		await this.projectName.click()
		await this.projectName.fill(type)
	}

	async gotoProjectIdea(type: string) {
		await this.projectIdea.isVisible()
		await this.projectIdea.click()
		await this.projectIdea.fill(type)
	}

	async gotoCategoryProjectNames() {
		await this.projectCategoryNames.isEnabled()
		await this.projectCategoryNames.click()
	}

	async gotoCategoryProjectName() {
		//await this.projectCategoryName.isEnabled()
		await this.projectCategoryName.click()
	}

	async gotoNextButton() {
		await this.nextButton.isEnabled()
		await this.nextButton.click()
	}

	async gotoTabDescription() {
		await this.tabDescription.isEnabled()
		await this.tabDescription.isVisible()
	}

	async checkHintDescription() {
		await this.hintDescription.isVisible()
	}

	async gotoDescriptionCard(type: string) {
		await this.descriptionCard.isVisible()
		await this.descriptionCard.click()
		await this.descriptionCard.fill(type)
	}

	async gotoSettingsTab() {
		await this.settingsTab.isEnabled()
		await this.settingsTab.click()
	}

	async checkHintsVisibility() {
		const hints = [this.hintSettingsDate, this.hintSettingsStatus, this.hintSettingsComment]
		for (const hint of hints) {
			await expect(hint).toBeVisible()
		}
	}

	async fillDateField(locator: Locator, date: DateString) {
		await locator.fill(date, { force: true })
	}

	async gotoStartDate(date: DateString) {
		await this.fillDateField(this.startDate, date)
	}

	async gotoComplitionDate(date: DateString) {
		await this.fillDateField(this.completionDate, date)
	}

	async gotoProjectStatuses() {
		await this.ProjectStatuses.click()
	}

	async gotoProjectStatus() {
		await this.ProjectStatus.click()
	}

	async checkHideComments() {
		await this.hideComments.isVisible()
	}

	async checkSelectHideComments() {
		await this.selectHideComments.isVisible()
		await this.selectHideComments.click()
	}

	async gotoPublishProject() {
		await this.publishProject.isVisible()
		await this.publishProject.isEnabled()
		await this.publishProject.click()
	}

	async gotoRemoveProject() {
		await this.publishProject.isVisible()
		await this.removeProject.isEnabled()
		await this.removeProject.click()
	}
}
