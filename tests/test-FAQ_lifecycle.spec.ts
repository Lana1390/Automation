import { pawLogIn } from '../pages/fixture_logIn'
import { createFAQ } from '../pages/pageFAQ'
import { randomText } from '../utils/utils'
import { expect, test } from '@playwright/test'

test.setTimeout(60000)

const generatedText = randomText()
const question = generatedText.split('? ')[0]
const answer = generatedText.split(' It ')[1]

test.beforeEach(async ({ page }) => {
	await pawLogIn({ page })
})

test.describe.serial('create edit remove FAQ desktop set', () => {
	test.skip('create FAQ with valid data', async ({ page }) => {
		const createNewFAQ = new createFAQ(page)

		await createNewFAQ.gotoProjectPage()
		await createNewFAQ.gotoEditProjectPage()
		await createNewFAQ.gotoFAQbutton()
		await createNewFAQ.checkValidationHints()
		await createNewFAQ.checkNameHints()
		await createNewFAQ.writeQuestion.pressSequentially(question)
		await createNewFAQ.writeAnswer.pressSequentially(answer)
		await createNewFAQ.gotoPublicFAQ()
		await page.waitForTimeout(7000)
		await expect.soft(page.getByRole('button', { name: question }).first()).toHaveText(question)
	})

	test.skip('edit FAQ question', async ({ page }) => {
		const createNewFAQ = new createFAQ(page)

		await createNewFAQ.gotoProjectPage()
		await createNewFAQ.gotoEditProjectPage()
		await createNewFAQ.gotoFAQbutton()
		await page.locator('[id="\\30 _more"]').click()
		await page.waitForTimeout(1000)
		await page.getByRole('button', { name: 'Редагувати' }).click()
		await page.locator('form').first().pressSequentially(question)
		await page.locator('form').last().pressSequentially(answer)
		await page.getByRole('button', { name: 'Зберігти зміни' }).click()
		await expect.soft(page.getByRole('button', { name: question })).toHaveText(question)
	})

	test.skip('create FAQ with invalid long text', async ({ page }) => {
		const createNewFAQ = new createFAQ(page)

		await createNewFAQ.gotoProjectPage()
		await createNewFAQ.gotoEditProjectPage()
		await createNewFAQ.gotoFAQbutton()
		await createNewFAQ.gotoWriteLongQuestion()
		await createNewFAQ.gotoWriteLongAnswer()
		await createNewFAQ.publicFAQ.isDisabled()
	})

	test.skip('remove FAQ question', async ({ page }) => {
		const createNewFAQ = new createFAQ(page)

		await createNewFAQ.gotoProjectPage()
		await createNewFAQ.gotoEditProjectPage()
		await createNewFAQ.gotoFAQbutton()
		await page.locator('[id="\\30 _more"]').click()
		await page.getByRole('button', { name: 'Видалити' }).click()
		await page.getByRole('button', { name: 'Видалити питання' }).click()
		expect(page.locator('[id="\\30 _more"]').isHidden())
	})
})
