<script>
	import Header from '#lib/components/Header.svelte'
	const topMatter = {
		theme: 'math',
		headerLeft: ['WorkedExampl.es', true, '/'],
		headerRight: ['Limits with Parameters', false],
	}
</script>

<div class="container {topMatter.theme}">
	<Header {topMatter} />
</div>
