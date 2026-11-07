<script>
	import Header from '#lib/components/Header.svelte'
	const topMatter = {
		theme: 'math',
		headerLeft: ['WorkedExampl.es', true, '/'],
		headerRight: ['Exponential and Logarithmic Limits', false],
	}
</script>

<div class="container {topMatter.theme}">
	<Header {topMatter} />
</div>
