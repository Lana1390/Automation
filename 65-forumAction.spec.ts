import { pawLogIn } from '../POM/fixture_logIn'
import { forumPage } from '../POM/forumPage'

import { test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
	await pawLogIn({ page })
})

test.describe.serial('forum create edit remove steps', () => {
	test('create new topic', async ({ page }) => {
		const createNewTopic = new forumPage(page)

		await createNewTopic.gotoForumPage()
		await createNewTopic.gotoTitleInput()
		await createNewTopic.gotoDescriptionInput()
		await createNewTopic.gotoPostTopic()
	})
})
