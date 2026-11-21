<script>
	import { slide } from 'svelte/transition'
	import ExampleStatement from '#lib/components/ExampleStatement.svelte'

	// statement is always visible; solution and answer are optional and toggled independently
	let { children, solution, answer, levels = '00' } = $props()

	const id = $props.id()
	let showSolution = $state(false)
	let showAnswer = $state(false)
</script>

<section class="worked-example" class:has-controls={solution || answer}>
	<ExampleStatement {children} {levels} />

	{#if solution || answer}
		<div class="controls">
			{#if solution}
				<button
					type="button"
					aria-expanded={showSolution}
					onclick={() => (showSolution = !showSolution)}
				>
					{showSolution ? 'Hide' : 'View'} Solution
				</button>
			{/if}
			{#if answer}
				<button type="button" aria-expanded={showAnswer} onclick={() => (showAnswer = !showAnswer)}>
					{showAnswer ? 'Hide' : 'Check'} Answer
				</button>
			{/if}
		</div>
	{/if}

	{#if solution && showSolution}
		<div class="panel solution" id="{id}-solution" transition:slide={{ duration: 750 }}>
			<span class="bold">Solution</span>: {@render solution()}
		</div>
	{/if}
	{#if answer && showAnswer}
		<div class="panel answer" transition:slide={{ duration: 750 }}>
			<span class="bold">Answer</span>:{@render answer()}
		</div>
	{/if}
</section>

<style lang="scss">
	.bold {
		font-weight: bold;
	}
	section {
		--accent: var(--grey-dark);
		background-color: white;
		border: 3px solid var(--accent);
		color: black;
		display: flex;
		flex-direction: column;
		font-family: glacialIndifferenceReg;
		font-family: texGyre;
		/* font-family: quicksand; */
		font-size: 85%;
		margin-block: 0.75em;
		padding: 0.5em 1em;
	}

	section.has-controls {
		padding-bottom: 0.75em;
	}

	/* the page's theme class (on .container) picks the accent colour */
	:global(.math) section {
		--accent: var(--math-primary);
	}
	:global(.statics) section {
		--accent: var(--statics-primary);
	}
	:global(.fluids) section {
		--accent: var(--fluids-primary);
	}

	.controls {
		display: flex;
		gap: 0.5em;
		justify-content: flex-end;
		margin-block: 0.5em 0;
	}

	button {
		background: var(--accent);
		border: 1px solid var(--accent);
		border-radius: 0.25em;
		color: black;
		cursor: pointer;
		font: inherit;
		font-size: 85%;
		padding: 0.125em 0.75em;
		width: 7rem;

		&:hover {
			/* ,&[aria-expanded='true'] { */
			background: var(--accent);
			font-weight: bold;
		}
	}

	.panel {
		border-top: 3px solid var(--accent);
		display: flow-root;
		line-height: 1;
		margin-top: 0.5em;
		padding-top: 0.5em;
	}
</style>
