import { pawLogIn } from '../POM/fixture_logIn'
import { projectPage } from '../POM/pageProject'
import { randomDate } from '../POM/utils'

import { expect, test } from '@playwright/test'
import * as fs from 'fs'

test.beforeEach(async ({ page }) => {
	await pawLogIn({ page })
})

const projectData = JSON.parse(fs.readFileSync('tests/utils/projectData.json', 'utf-8'))

const projectNameD = projectData[0].name[0]
const projectIdeaD = projectData[1].idea[0]
const projectDescrD = projectData[2].description[0]

const projectNameED = projectData[0].name[3]
const projectIdeaED = projectData[1].idea[3]
const projectDescrED = projectData[2].description[3]

const projectStartDate = randomDate(new Date(2023, 0, 1), new Date(2024, 0, 1))
const projectCompletionDate = randomDate(projectStartDate, new Date(2025, 0, 1))
const formattedStartDate = projectStartDate.toISOString().slice(0, 10) //  Форматування дат у формат YYYY-MM-DD
const formattedCompletionDate = projectCompletionDate.toISOString().slice(0, 10) //  Форматування дат у формат YYYY-MM-DD
const stageStartDate = randomDate(projectStartDate, projectCompletionDate)
const stageCompletionDate = randomDate(stageStartDate, projectCompletionDate)
const formattedStageStartDate = stageStartDate.toISOString().slice(0, 10) //  Форматування дат у формат YYYY-MM-DD
const formattedStageCompletionDate = stageCompletionDate.toISOString().slice(0, 10) //  Форматування дат у формат YYYY-MM-DD

test.describe.serial('create edit remove project desktop set', () => {
	test.skip('create the new project D', async ({ page }) => {
		const createNewProject = new projectPage(page)

		await createNewProject.gotoProjectsPage()
		await createNewProject.gotoCreateProject()
		await createNewProject.gotoTabCard()
		await createNewProject.checkHint()
		await createNewProject.nextButton.isDisabled()
		await createNewProject.gotoCoverFieldPng()
		await createNewProject.gotoProjectName(projectNameD)
		await createNewProject.gotoProjectIdea(projectIdeaD)
		await createNewProject.gotoCategoryProjectNames()
		await createNewProject.gotoCategoryProjectName()
		await createNewProject.gotoNextButton()
		await createNewProject.gotoTabDescription()
		await createNewProject.checkHintDescription()
		await createNewProject.nextButton.isDisabled()
		await createNewProject.gotoDescriptionCard(projectDescrD)
		await createNewProject.gotoNextButton()
		await createNewProject.checkHintsVisibility()
		await createNewProject.publishProject.isDisabled()
		await createNewProject.gotoStartDate(formattedStartDate)
		await createNewProject.gotoComplitionDate(formattedCompletionDate)
		await createNewProject.gotoProjectStatuses()
		await createNewProject.gotoProjectStatus()
		await createNewProject.fillDateField(createNewProject.stageStartDate, formattedStageStartDate)
		await createNewProject.fillDateField(
			createNewProject.stageCompletionDate,
			formattedStageCompletionDate
		)
		await createNewProject.checkHideComments()
		await createNewProject.checkSelectHideComments()
		await createNewProject.gotoPublishProject()
		await expect(page.getByRole('heading', { name: projectNameD })).toHaveText(projectNameD)
		//await page.getByRole('heading', { name: 'Create новий проєкт D 1.' }).isVisible()
		// await createNewProject.gotoReviewvPng()
	})

	test.skip('edit members project', async ({ page }) => {
		const editProject = new projectPage(page)
		const responsePromise = page.waitForRequest('**')

		await editProject.gotoProjectsPage()
		await responsePromise

		await page.getByRole('heading', { name: projectNameD }).click()

		await editProject.gotoProjectEditButton()
		await editProject.gotoCoverFieldJpeg()
		await editProject.gotoProjectName(projectNameED)
		await editProject.gotoProjectIdea(projectIdeaED)
		await page.getByLabel('Категорія проєкту*').click()
		await page.getByLabel('Розваги').click()
		await editProject.gotoNextButton()
		await page.getByRole('tab', { name: 'Опис' }).isVisible()
		await editProject.gotoDescriptionCard(projectDescrED)
		await editProject.gotoNextButton()
		await page.getByRole('tab', { name: 'Налаштування' }).isVisible()
		await editProject.gotoStartDate(formattedStartDate)
		await editProject.gotoComplitionDate(formattedCompletionDate)
		await editProject.gotoProjectStatuses()
		await editProject.gotoProjectStatus()
		await page.getByLabel('Етап проєкту*').click()
		await page.getByLabel('В розробці').getByText('В розробці').click()
		await editProject.fillDateField(editProject.stageStartDate, formattedStageStartDate)
		await editProject.fillDateField(editProject.stageCompletionDate, formattedStageCompletionDate)
		await editProject.checkHideComments()
		await page.getByRole('checkbox').click()
		await page.getByRole('button', { name: 'Опублікувати зміни' }).click()
		await expect(page.getByRole('heading', { name: projectNameED })).toHaveText(projectNameED)
	})

	test.skip('exit from a partially filled project page', async ({ page }) => {
		const createNewProject = new projectPage(page)

		await createNewProject.gotoProjectsPage()
		await createNewProject.gotoCreateProject()
		await createNewProject.gotoTabCard()
		await createNewProject.gotoProjectName(projectNameD)
		await createNewProject.gotoProjectIdea(projectIdeaD)
		//expect(createNewProject.gotoProjectsPage())
		const result = await createNewProject.gotoProjectsPage()
		expect(result).toBeFalsy()
	})

	test.skip('remove members project', async ({ page }) => {
		const removeProject = new projectPage(page)

		await removeProject.gotoProjectsPage()
		await page.getByRole('link', { name: projectNameED }).click()
		await removeProject.gotoProjectEditButton()
		// await removeProject.gotoRemoveProject()//НЕ ПРАЦЮЄ
	})
})
