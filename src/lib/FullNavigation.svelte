<script>
	export let links;
</script>

<nav class={`${$$restProps.class || ''} desktop-nav`}>
	<div class="home-link">
		<div>
			<a href="/">brian_philip</a>
		</div>
	</div>
	<div class="nav-right">
		{#each links as link}
			<a
				class={link.action ? 'action-button' : ''}
				href={link.href}
				target={link.external ? '_blank' : ''}
				rel={link.external ? 'noopener noreferrer' : ''}>{link.text}</a
			>
		{/each}
	</div>
</nav>

<style>
	@media screen and (max-width: 720px) {
		.desktop-nav {
			display: none;
		}
	}

	nav {
		display: flex;
		justify-content: space-between;
		border-bottom: 2px solid var(--primary);
		width: 100%;
		padding: 1rem;
	}

	.home-link {
		display: flex;
		margin-top: 0.5rem;
		align-items: center;
	}

	.home-link a {
		font-size: 2rem;
		text-decoration: none;
		font-weight: bold;
		font-family: 'SpecialElite';
	}

	.nav-right {
		display: flex;
		flex-grow: 2;
		justify-content: right;
		align-items: center;
		gap: 1rem;
	}

	.nav-right a {
		font-size: 1.2rem;
		font-weight: bold;
		text-align: center;
	}

	.nav-right .action-button {
		font-weight: normal;
		padding: 1rem;
		border-radius: 8px;
		background-color: var(--primary);
		text-decoration: none;
		color: var(--text);
		cursor: pointer;
	}

	.action-button:hover {
		color: var(--dark-text);
		background-color: var(--primary-hover);
	}
</style>
