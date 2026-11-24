<script>
	import Header from '#lib/components/Header.svelte'
	import WE from '#lib/components/WE.svelte'
	import { ki, kd } from '#lib/utilities.js'
	const levels = 2
	const topMatter = {
		theme: 'math',
		headerLeft: ['WorkedExampl.es', true, '/'],
		headerRight: ['1. Limits', false], // statics, strength, fluids
	}
</script>

<div class="container {topMatter.theme}">
	<Header {topMatter} />
	<main>
		<h4>1.2 Limits at Infinity</h4>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to \infty} \frac{5x^2 + 2x - 1}{3x^2 - 7}`}

			{#snippet solution()}
				?
			{/snippet}

			{#snippet answer()}
				?
			{/snippet}
		</WE>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to -\infty} \frac{4x^3 - x}{2x^3 + 5x^2}`}

			{#snippet solution()}
				?
			{/snippet}

			{#snippet answer()}
				?
			{/snippet}
		</WE>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to \infty} \frac{7x^4 - 2x}{x^5 + 3}`}

			{#snippet solution()}
				?
			{/snippet}

			{#snippet answer()}
				?
			{/snippet}
		</WE>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to -\infty} \frac{2x^2 + 3x}{x^2 - 1}`}

			{#snippet solution()}
				?
			{/snippet}

			{#snippet answer()}
				?
			{/snippet}
		</WE>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to \infty} \frac{\sqrt{9x^2 + 1}}{x+2}`}

			{#snippet solution()}
				?
			{/snippet}

			{#snippet answer()}
				?
			{/snippet}
		</WE>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to -\infty} \frac{\sqrt{9x^2 + 1}}{x+2}`}

			{#snippet solution()}
				?
			{/snippet}

			{#snippet answer()}
				?
			{/snippet}
		</WE>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to \infty} \left(\sqrt{x^2 + x} - x\right)`}

			{#snippet solution()}
				?
			{/snippet}

			{#snippet answer()}
				?
			{/snippet}
		</WE>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{y \to 8} \frac{y^{2/3}-4}{y^{1/3}-2}`}

			{#snippet solution()}
				?
			{/snippet}

			{#snippet answer()}
				?
			{/snippet}
		</WE>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to 0} \frac{\sqrt{x+4} - 2}{x}`}

			{#snippet solution()}
				?
			{/snippet}

			{#snippet answer()}
				?
			{/snippet}
		</WE>
		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to 1} \frac{x^3 - 1}{x-1}`}

			{#snippet solution()}
				?
			{/snippet}

			{#snippet answer()}
				?
			{/snippet}
		</WE>
		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to 4} \frac{x-4}{\sqrt{x} - 2}`}

			{#snippet solution()}
				?
			{/snippet}

			{#snippet answer()}
				?
			{/snippet}
		</WE>
		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to 0} \frac{(x+1)^2 - 1}{x}`}

			{#snippet solution()}
				?
			{/snippet}

			{#snippet answer()}
				?
			{/snippet}
		</WE>
		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to 2} \frac{x^2 - 4x + 4}{x-2}`}

			{#snippet solution()}
				?
			{/snippet}

			{#snippet answer()}
				?
			{/snippet}
		</WE>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to -2} \frac{x^2-x-6}{x^2+7x+10}`}

			{#snippet solution()}
				?
			{/snippet}

			{#snippet answer()}
				?
			{/snippet}
		</WE>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
	</main>
</div>

<style>
	main {
		counter-reset: section-counter 1 subsection-counter 2 subsubsection-counter 0 problem-counter 0;
	}
</style>
