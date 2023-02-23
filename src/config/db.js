import { createClient } from '@sanity/client';
import config from '.';

export const client = createClient({
	projectId: 'r0ohisby',
	dataset: 'author',
	apiVersion: '2023-02-22',
	useCdn: config.ENV === 'dev' ? false : true,
	token: config.SANITY_AUTH_TOKEN
});
