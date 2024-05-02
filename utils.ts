import { Page } from '@playwright/test'
import { randomInt } from 'crypto'
import * as fs from 'fs'

export function getAuthData() {
	const filePath = 'loginData.json'
	const rawData = fs.readFileSync(filePath)
	const jsonData = JSON.parse(rawData.toString())

	return {
		email: jsonData.email as string,
		password: jsonData.password as string,
	}
}

export function randomDate(start: Date, end: Date): Date {
	return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

export function randomText(): string {
	const data = JSON.parse(fs.readFileSync('tests/utils/rFAQ.json', 'utf8'))

	const questions = data[0].question
	const answers = data[1].answer

	// запитання
	const randomQuestionIndex = randomInt(0, questions.length)
	const question = questions[randomQuestionIndex]

	//відповідь
	const randomAnswerIndex = randomInt(0, answers.length)
	const answer = answers[randomAnswerIndex]

	// рандомний символ
	const randomSymbol = String.fromCharCode(randomInt(65, 90)) // A-Z

	// текст
	return `${randomSymbol} What ${question}? It ${answer}`
}

interface RandomNames {
	randomNameD: string
	randomNameM: string
	randomNamED: string
	randomNameEM: string
}

export function randomTextP(): RandomNames {
	const data = JSON.parse(fs.readFileSync('tests/utils/projectData.json', 'utf8'))

	//Імʼя для нового десктоп проєкту
	const projectNameD = data[0].name[0]
	const randomNameD = randomInt(0, projectNameD.length)

	//Імʼя для нового мобайл проєкту
	const projectNameM = data[0].name[1]
	const randomNameM = randomInt(0, projectNameM.length)

	//Імʼя для нового мобайл проєкту
	const projectNameED = data[0].name[3]
	const randomNamED = randomInt(0, projectNameED.length)

	//Імʼя для нового мобайл проєкту
	const projectNameEM = data[0].name[2]
	const randomNameEM = randomInt(0, projectNameEM.length)

	// рандомний символ
	const randomSymbol = String.fromCharCode(randomInt(65, 90)) // A-Z

	return {
		randomNameD: `${projectNameD} ${randomSymbol} ${randomNameD}`,
		randomNameM: `${projectNameM} ${randomSymbol} ${randomNameM} `,
		randomNamED: `${projectNameED} ${randomSymbol} ${randomNamED} `,
		randomNameEM: `${projectNameEM} ${randomSymbol} ${randomNameEM}`,
	}
}

export async function findProjectWithPagination(
	page: Page,
	projectText: string,
	paginationSelector: string
) {
	let currentPage = 1
	const maxPages = 10 // Обмеження кількості сторінок для перевірки

	while (currentPage <= maxPages) {
		try {
			// Пошук проекту на поточній сторінці
			const projectLink = page.getByRole('link', { name: projectText, exact: true })
			await projectLink.click()

			return // Проект знайдено, вихід з функції
		} catch (error) {
			// Проект не знайдено, перехід на наступну сторінку
			console.warn(`Project "${projectText}" not found on page ${currentPage}. Trying next page...`)

			// Перевірка, чи є кнопка пагінації
			if (!(await page.locator(paginationSelector).isVisible())) {
				throw new Error(`Pagination button not found on page ${currentPage}.`)
			}

			await page.click(paginationSelector)
			currentPage++
		}
	}

	throw new Error(`Project "${projectText}" not found within ${maxPages} pages.`)

