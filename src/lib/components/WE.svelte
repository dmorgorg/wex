<script>
	import { slide } from 'svelte/transition'

	// statement is always visible; solution and answer are optional and toggled independently
	let { children, solution, answer } = $props()

	const id = $props.id()
	let showSolution = $state(false)
	let showAnswer = $state(false)
</script>

<section class="worked-example">
	<div class="children">{@render children()}</div>

	{#if solution || answer}
		<div class="controls">
			{#if solution}
				<button
					type="button"
					aria-expanded={showSolution}
					aria-controls="{id}-solution"
					onclick={() => (showSolution = !showSolution)}
				>
					{showSolution ? 'Hide' : 'Show'} Solution
				</button>
			{/if}
			{#if answer}
				<button
					type="button"
					aria-expanded={showAnswer}
					aria-controls="{id}-answer"
					onclick={() => (showAnswer = !showAnswer)}
				>
					{showAnswer ? 'Hide' : 'Check'} Answer
				</button>
			{/if}
		</div>
	{/if}

	{#if solution && showSolution}
		<div class="panel solution" id="{id}-solution" transition:slide={{ duration: 150 }}>
			{@render solution()}
		</div>
	{/if}
	{#if answer && showAnswer}
		<div class="panel answer" id="{id}-answer" transition:slide={{ duration: 150 }}>
			{@render answer()}
		</div>
	{/if}
</section>

<style lang="scss">
	section {
		/* the theme colour comes from the page's .math/.statics/.fluids class */
		--accent: currentColor;
		border: 1px solid var(--accent);
		color: black;
		margin-block: 0.5em;
		padding: 0.25em 1em;
	}

	.controls {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5em;
		margin-block: 0.5em;
	}

	button {
		background: transparent;
		border: 1px solid var(--accent);
		border-radius: 0.25em;
		color: var(--accent);
		cursor: pointer;
		font: inherit;
		padding: 0.125em 0.75em;

		&:hover,
		&[aria-expanded='true'] {
			background: var(--accent);
			color: white;
		}
	}

	.panel {
		border-top: 1px dashed var(--accent);
		margin-top: 0.5em;
		padding-top: 0.5em;
	}
</style>
