import { pawLogIn } from '../pages/fixture_logIn'
import { forumPage } from '../pages/forumPage'

import { test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
	await pawLogIn({ page })
})

test.describe.serial('forum create edit remove steps', () => {
	test('create new topic', async ({ page }) => {
		const createNewTopic = new forumPage(page)

		await createNewTopic.gotoForumPage()
		await createNewTopic.gotoCreateNewTopic()
	})
})

