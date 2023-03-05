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
	emailAddressesForTemplate: (template) => `*[_type == "emailAddress" && ${template}]`,
	posts:
		'*[_type == "post" && hidden == false]{_createdAt, slug, tag, title, views, bodyMarkdown, _id } | order(_createdAt desc)',
	lastFivePosts:
		'*[_type == "post" && hidden == false][0..5] {_createdAt, slug, tag, title, views, bodyMarkdown, _id } | order(_createdAt desc)',
	novels: '*[_type == "novel"]{...,"cover":cover.asset->url}',
	postBySlug: '*[_type == "post" && slug.current == $slug && hidden == false]',
	commentsByPost:
		'*[_type == "comment" && post._ref == $postId] { _id, body, _createdAt, "name": emailAddress->name}',
	commentNumByPost: 'count(*[_type == "comment" && post._ref == $postId])',
	repliesByComment:
		'*[_type == "comment" && parentComment._ref == $commentId] { _id, body, _createdAt, "name": emailAddress->name} | order(_createdAt desc)'
};
