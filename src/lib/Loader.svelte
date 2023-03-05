<div class="loader">
	<span class="loader-element" />
	<span class="loader-element" />
	<span class="loader-element" />
</div>

<style>
	:root {
		--size: 3px;
	}

	.loader {
		background-color: inherit;
		overflow: hidden;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		align-content: center;
		justify-content: center;
		z-index: 100000;
		/* margin-top: 3rem; */
	}

	.loader-element {
		border-radius: 100%;
		border: var(--size) solid var(--background);
		margin: calc(var(--size) * 2);
	}

	.loader-element:nth-child(1) {
		animation: preloader 0.6s ease-in-out alternate infinite;
	}
	.loader-element:nth-child(2) {
		animation: preloader 0.6s ease-in-out alternate 0.2s infinite;
	}

	.loader-element:nth-child(3) {
		animation: preloader 0.6s ease-in-out alternate 0.4s infinite;
	}

	@keyframes preloader {
		100% {
			transform: scale(2);
		}
	}
</style>
