<script>
	import Header from '#lib/components/Header.svelte'
	const topMatter = {
		theme: 'math',
		headerLeft: ['WorkedExampl.es', true, '/'],
		headerRight: ['Basic Limits', false], // statics, strength, fluids
	}
</script>

<div class="container {topMatter.theme}">
	<Header {topMatter} />
	<main>
		<h1>Basic Limits</h1>
		{#each Array(10) as _, i}
			<p>
				Placeholder {i + 1}: This is temporary text for testing the scrollbar on the basic
				limits page.
			</p>
		{/each}
	</main>
</div>
