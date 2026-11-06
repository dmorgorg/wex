<script>
	import Header from '$lib/components/Header.svelte';
	const topMatter = {
		theme: 'math',
		headerLeft: ['WorkedExampl.es', true, '/'],
		headerRight: ['One-sided Limits', false]
	};
</script>

<div class="container {topMatter.theme}">
	<header><Header {topMatter} /></header>
</div>
