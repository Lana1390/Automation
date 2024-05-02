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

// async function findAndInteractWithProject(page, projectName) {
// 	const projectLink = await page.getByRole('link', { name: projectName, exact: true });

// 	if (await projectLink.isVisible()) {
// 	  // Project found on the current page
// 	  await page.waitForTimeout(projectLinkTimeout);
// 	  await projectLink.click();
// 	  // ... (Your code to interact with the project)
// 	} else {
// 	  // Project not found on the current page
// 	  await page.locator(paginationButtonSelector).click();

// 	  // Retry finding the project on the next page
// 	  const nextPageProjectLink = await page.getByRole('link', { name: projectName, exact: true });

// 	  if (await nextPageProjectLink.isVisible()) {
// 		// Project found on the next page
// 		await nextPageProjectLink.click();
// 		// ... (Your code to interact with the project)
// 	  } else {
// 		// Project not found on either page
// 		// Handle project not found scenario (without console.log)
// 		// ... (Your code to handle project not found)
// 	  }
// 	}
//   }
