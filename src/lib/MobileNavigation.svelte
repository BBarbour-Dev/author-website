<script>
	export let links;
	let drawerOpen = false;

	function toggleDrawer() {
		drawerOpen = !drawerOpen;
	}
</script>

<nav>
	<div class="hamburger" style={drawerOpen ? 'visibility: hidden;' : ''}>
		<button on:click={toggleDrawer}>&#9776;</button>
	</div>
	<div
		class="mobile-nav"
		on:click={toggleDrawer}
		on:keydown={toggleDrawer}
		style={drawerOpen ? 'visibility: visible; width: 350px;' : ''}
	>
		{#if drawerOpen}
			<div class="drawer">
				<button class="close">&times;</button>
				<div class="mobile-logo">
					<span>brian_philip</span>
				</div>
				<div class="link"><a href="/">Home</a></div>
				{#each links as link}
					<div class="link">
						<a
							href={link.href}
							target={link.external ? '_blank' : ''}
							rel={link.external ? 'noopener noreferrer' : ''}>{link.text}</a
						>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</nav>

<style>
	.hamburger {
		width: 100%;
		display: none;
		z-index: 1;
		border-bottom: 0;
		position: fixed;
		bottom: 3%;
		left: 80vw;
	}

	.hamburger button {
		height: 5rem;
		width: 5rem;
		background-color: var(--highlight);
		border: none;
		font-size: 2.25rem;
		color: var(--background);
		border-radius: 50%;
		box-shadow: 8px, 4px, 4px var(--primary);
	}

	.hamburger button:hover {
		color: var(--white);
	}

	.drawer {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding-bottom: 6rem;
		align-items: center;
		gap: 0.5rem;
		overflow: hidden;
		transition: 0.3s;
	}

	.mobile-logo {
		padding-bottom: 0.5rem;
	}

	.mobile-logo span {
		font-size: 1.5rem;
		text-align: center;
		color: var(--background);
		letter-spacing: 2px;
		display: block;
		text-decoration: none;
		font-weight: bold;
		font-family: 'SpecialElite';
	}

	.link a {
		width: 150px;
		text-align: center;
		font-size: 1.5rem;
		color: var(--text);
		display: block;
		text-underline-offset: 0%;
		text-decoration: none;
		padding: 0.75rem;
		background-color: var(--background);
		border-radius: var(--border-radius);
	}

	.link a:hover {
		background-color: var(--dark-text);
	}

	.close {
		position: absolute;
		bottom: 0;
		right: 25px;
		font-size: 4rem;
		margin-left: 50px;
		border: none;
		background-color: transparent;
		color: var(--background);
	}

	.close:hover {
		color: var(--white);
	}

	.mobile-nav {
		display: none;
		visibility: hidden;
		height: 100vh;
		width: 0%;
		position: fixed;
		z-index: 1;
		bottom: 0;
		right: 0;
		background-color: var(--highlight);
		border-radius: 8px 0 0 0;
		overflow-x: hidden;
		transition: 0.3s;
	}

	@media screen and (max-width: 720px) {
		.hamburger {
			display: block;
		}

		.mobile-nav {
			display: flex;
		}
	}
</style>
