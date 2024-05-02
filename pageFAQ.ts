import { expect, type Locator, type Page } from '@playwright/test'

export class createFAQ {
	readonly page: Page
	readonly avatar: Locator
	readonly projectsButton: Locator
	readonly projectButton: Locator
	readonly editProjectButton: Locator
	readonly FAQbutton: Locator
	readonly validationHintQuestion: Locator
	readonly validationHintAnswer: Locator
	readonly nameHintQuestion: Locator
	readonly nameHintAnswer: Locator
	readonly writeQuestion: Locator
	readonly writeAnswer: Locator
	readonly publicFAQ: Locator
	readonly FAQmenu: Locator
	readonly editButton: Locator
	readonly saveChangesButton: Locator

	constructor(page: Page) {
		this.page = page
		this.avatar = page.locator('button[aria-haspopup="menu"][class*="flex items-center gap-x-2"]')
		this.projectsButton = page.getByRole('menuitem', { name: 'Проєкти' }) //await page.click('div[href="/profile/projects"]');
		this.projectButton = page.getByRole('link', { name: 'Project1 by User1 project' })
		this.editProjectButton = page.getByRole('button', { name: 'Редагувати' })
		this.FAQbutton = page.getByRole('link', { name: 'FAQ' })
		this.validationHintQuestion = page.getByText('Використано 0/200 символів')
		this.validationHintAnswer = page.getByText('Використано 0/1000 символів')
		this.nameHintQuestion = page.getByText('Питання*')
		this.nameHintAnswer = page.getByText('Відповідь*')
		this.writeQuestion = page.locator('input[name="question"][placeholder="Введіть питання"]')
		this.writeAnswer = page.locator('textarea[name="answer"][placeholder="Короткий опис"]')
		this.publicFAQ = page.getByRole('button', { name: 'Опублікувати питання' })

		this.FAQmenu = page.locator(
			'button[id^="radix-:"][id$="sta:"] h3:text-is(?):not([data-state="open"])'
		) //('[id="radix-\\:R2kauuuuttsta\\:"]') [text*="AAAAAAAAA"]
		this.editButton = page.getByRole('button', { name: 'Реадагувати' })
		this.saveChangesButton = page.getByRole('button', { name: 'Зберігти зміни' })
	}

	// async goto() {
	//         await this.page.goto('/profile')
	//     }

	// async pressAvatar() {
	//         await this.avatar.isVisible()
	//         await this.avatar.isEnabled()
	//         await this.avatar.click()
	//     }
	//  async gotoProjectsPage() {
	//         await this.projectsButton.click()
	//  }

	//  async gotoProjectPage() {
	//         await this.projectButton.isEnabled()
	//         await this.projectButton.click()
	//     }

	async gotoProjectPage() {
		const responsePromise = this.page.waitForResponse('**')
		await this.page.goto('/profile')
		await responsePromise

		await this.avatar.isVisible()
		// await this.avatar.isEnabled()
		await this.avatar.click()
		await this.projectsButton.click()
		// await this.projectButton.isEnabled()
		await this.projectButton.click()
	}
	async gotoEditProjectPage() {
		await this.editProjectButton.isEnabled()
		await this.editProjectButton.click()
	}

	async gotoFAQbutton() {
		// await this.FAQbutton.isEnabled()
		await this.FAQbutton.click()
	}

	async checkValidationHints() {
		const hints = [this.validationHintQuestion, this.validationHintAnswer]
		for (const hint of hints) {
			await expect(hint).toBeVisible()
		}
	}

	async checkNameHints() {
		const hints = [this.nameHintQuestion, this.nameHintAnswer]
		for (const hint of hints) {
			await expect(hint).toBeVisible()
		}
	}
	async gotoWriteLongQuestion() {
		await this.writeQuestion.isVisible()
		const longQuestion = 'Q?'.repeat(201)
		await this.writeQuestion.fill(longQuestion)

		// const currentText = await this.writeQuestion.inputValue()
		// expect(currentText.length).toBeLessThanOrEqual(200)
	}

	async gotoWriteLongAnswer() {
		await this.writeAnswer.isVisible()
		const longAnswer = 'A!'.repeat(1001)
		// await this.writeAnswer.click()
		await this.writeAnswer.fill(longAnswer)

		// const currentText = await this.writeAnswer.inputValue()
		// expect(currentText.length).toBeLessThanOrEqual(1000)
	}

	// async gotoWriteQuestion(t) {
	// 	await this.writeQuestion.isVisible()
	// 	await this.writeQuestion.focus()
	// 	await this.writeQuestion.type()

	// }

	// async gotoWriteAnswer() {
	// 	await this.writeAnswer.isVisible()
	// 	await this.writeAnswer.focus()
	// 	await this.writeAnswer.type('Answer')

	// }
	// async gotoFAQmenu() {
	// 	await this.FAQmenu.click()
	// }

	// async gotoEditFAQbutton() {
	// 	await this.editButton.isEnabled()
	// 	await this.editButton.click()
	// }

	// async gotoChangeQuestion() {
	// 	await this.writeAnswer.isVisible()
	// 	const newQuestionText = 'Новий текст для питання'
	// 	await this.writeAnswer.fill(newQuestionText)
	// }

	// async gotoSaveChanges() {
	// 	await this.saveChangesButton.isEnabled()
	// 	await this.saveChangesButton.click()
	// }

	// async gotoChangeAnswer() {
	//    await this.writeAnswer.isVisible()
	//     const newAnswerText = 'Новий текст для відповіді';
	//     await yourPageObject.editAnswer(newAnswerText);
	//     await expect(yourPageObject.writeAnswer.inputValue()).resolves.toEqual(newAnswerText);
	// }

	async gotoPublicFAQ() {
		//await this.publicFAQ.isEnabled()
		await this.publicFAQ.click()
	}
}
