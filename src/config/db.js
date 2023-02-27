import { createClient } from '@sanity/client';
import config from '.';

export const client = createClient({
	projectId: 'r0ohisby',
	dataset: 'author',
	apiVersion: '2023-02-22',
	useCdn: config.ENV === 'dev' ? false : true,
	token: config.SANITY_AUTH_TOKEN
});

export const queries = {
	author: '*[_type == "author" && name == "Brian Philip"]{..., "avatar": avatar.asset->url}',
	shouts: '*[_type == "shout" && !hidden]{_createdAt, body, name} | order(_createdAt desc)',
	emailAddress: '*[_type == "emailAddress" && mailto == $mailto]'
};
