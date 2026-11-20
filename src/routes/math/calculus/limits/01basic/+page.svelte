<script>
	import Header from '#lib/components/Header.svelte'
	import WE from '#lib/components/WE.svelte'
	import { ki, kd } from '#lib/utilities.js'
	const topMatter = {
		theme: 'math',
		headerLeft: ['WorkedExampl.es', true, '/'],
		headerRight: ['1 Limits', false], // statics, strength, fluids
	}
</script>

<div class="container {topMatter.theme}">
	<Header {topMatter} />
	<main>
		<h4>1.1 Basic Limits</h4>
		Evaluate the following limits:
		<WE>
			{@html ki('\\lim_{x \\to 3} (2x + 1)')}

			{#snippet solution()}
				Substitute {@html ki('x = 3')} directly, because {@html ki('2x + 1')} is continuous:
				{@html kd('2(3) + 1 = 7')}
			{/snippet}

			{#snippet answer()}
				{@html ki('7')}
			{/snippet}
		</WE>
	</main>
</div>
