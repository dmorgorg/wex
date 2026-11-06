<script>
	import Header from '#lib/components/Header.svelte'
	const topMatter = {
		theme: 'math',
		headerLeft: ['WorkedExampl.es', true, '/'],
		headerRight: ['Trigonometric Limits', false], // statics, strength, fluids
	}
</script>

<div class="container {topMatter.theme}">
	<header><Header {topMatter} /></header>
</div>
