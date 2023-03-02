import { createClient } from '@sanity/client';
import config from '../config';

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
	emailAddress: '*[_type == "emailAddress" && mailto == $mailto]',
	lastFivePosts:
		'*[_type == "post" && hidden == false][0..5] {_createdAt, slug, tag, title, views, bodyMarkdown } | order(_createdAt desc)',
	posts:
		'*[_type == "post" && hidden == false]{_createdAt, slug, tag, title, views, bodyMarkdown } | order(_createdAt desc)',
	novels: '*[_type == "novel"]{...,"cover":cover.asset->url}',
	postBySlug: '*[_type == "post" && slug.current == $slug && hidden == false]',
	emailAddressesForTemplate: '*[_type == "emailAddress" && $template == true]'
};
