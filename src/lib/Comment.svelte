<script>
	import CommentForm from './CommentForm.svelte';
	import { getCapitalizedDateString } from '../helpers/getCapitalizedDateString';

	export let comment;
	export let postId;
	export let comments = undefined;
	export let parent = true;

	let replyForm = false;

	function showReplyForm() {
		replyForm = true;
	}
</script>

<div class="comment" style={!parent ? 'margin-left: 3rem;' : ''}>
	<p class="commenter">
		{comment.name} said:
		<span class="date">{getCapitalizedDateString(comment._createdAt)}</span>
	</p>
	<p class="comment-body">{comment.body}</p>
	{#if parent}
		{#if !replyForm}
			<div class="button-row">
				<button on:click={showReplyForm}>Reply</button>
			</div>
		{/if}
		{#if replyForm}
			<div class="reply-form">
				<CommentForm {postId} commentId={comment._id} bind:comments />
			</div>
		{/if}
	{/if}
</div>
<slot />

<style>
	.comment {
		padding: 1rem;
		border: 2px solid var(--primary);
		border-radius: var(--border-radius);
	}

	.commenter {
		margin: 0;
		margin-bottom: 0.5rem;
		color: var(--primary);
		line-height: 1.25rem;
	}

	.comment-body {
		margin: 0;
		margin-bottom: 1rem;
		font-weight: normal;
		color: var(--text);
		line-height: 1.25rem;
	}

	.date {
		font-size: 1rem;
		font-weight: normal;
		float: right;
		color: var(--text);
	}

	.button-row {
		display: flex;
		justify-content: flex-start;
	}

	.button-row button {
		border-radius: var(--border-radius);
		border: none;
		padding: 0.5rem 1.25rem;
		font-size: 1rem;
		background-color: var(--primary);
		color: var(--text);
		font-weight: 500;
	}

	.button-row button:hover {
		padding: 0.75rem 1.5rem;
		color: var(--dark-text);
		background-color: var(--primary-hover);
		transition: padding 0.2s;
	}

	.reply-form {
		margin-top: 1.5rem;
	}
</style>
