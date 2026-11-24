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
			Given that {@html ki`\displaystyle f(x)=\frac{|x-3|}{x^2-9}`}, determine {@html ki`\lim_{x\to 3^-} f(x), \lim_{x\to 3^+} f(x)`}
			and {@html ki`\lim_{x\to 3} f(x)`}

			{#snippet solution()}
				&nbsp;
				{@html kd`
				\begin{aligned}
					\displaystyle\lim_{x\to 3^-} f(x) &=\displaystyle\lim_{x\to 3^-} \frac{(3-x)}{(x-3)(x+3)}=\displaystyle\lim_{x\to 3^-} \frac{-\cancel{(x-3)}}{\cancel{(x-3)}(x+3)}=-\frac{1}{6}\\[15pt]
					\displaystyle\lim_{x\to 3^+} f(x) &=\displaystyle\lim_{x\to 3^+} \frac{(x-3)}{(x-3)(x+3)}=\displaystyle\lim_{x\to 3^+} \frac{\cancel{(x-3)}}{\cancel{(x-3)}(x+3)}=\frac{1}{6}\\[15pt]
				\end{aligned}				
			`}
				{@html kd`\lim_{x\to 3} f(x) \textsf{ does not exist (DNE), since} \lim_{x\to 3^-} f(x) \ne \lim_{x\to 3^+} f(x) `}
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
