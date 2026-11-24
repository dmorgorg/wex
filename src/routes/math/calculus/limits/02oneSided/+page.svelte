<script>
	import Header from '#lib/components/Header.svelte'
	import WE from '#lib/components/WE.svelte'
	import { ki, kd } from '#lib/utilities.js'
	const levels = 2
	const topMatter = {
		theme: 'math',
		headerLeft: ['WorkedExampl.es', true, '/'],
		headerRight: ['One-sided Limits', false],
	}
</script>

<div class="container {topMatter.theme}">
	<Header {topMatter} />
	<main>
		<div><a href="/math/calculus/limits/defs">Limits: Definitions and Theorems</a></div>
		<h4>1.2 One-Sided Limits</h4>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to 2} (3x^2 - 5x + 2)`}

			{#snippet solution()}
				<blockquote>
					Since {@html ki`3x^2 - 5x + 2`} is continuous everywhere, we can simply evaluate the expression
					at {@html ki`x=2`}
				</blockquote>
				{@html kd`\displaystyle \lim_{x \to 2} (3x^2 - 5x + 2)=3(2)^2 -5(2)+2 = 4`}
			{/snippet}

			{#snippet answer()}
				{@html kd`\displaystyle \lim_{x \to 2} (3x^2 - 5x + 2)=4`}
			{/snippet}
		</WE>
	</main>
</div>

<style>
	main {
		counter-reset: section-counter 1 subsection-counter 2 subsubsection-counter 0 problem-counter 0;
		a {
			color: inherit;
			font-size: 80%;
			text-align: right;
			/* align-self: end; */
			/* border: 1px solid black; */
			/* padding-bottom: 1rem; */
			margin-top: -0.75rem;
			float: right;
			/* width: 100%; */
		}
		h4 {
			display: block;
			font-size: 120%;
			/* margin-top: 1rem; */
			/* border: 1px solid black; */
			padding-block: 1rem;
		}
	}
</style>
