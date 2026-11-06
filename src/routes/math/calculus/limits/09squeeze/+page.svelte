<script>
	import Header from '$lib/components/Header.svelte';
	const topMatter = {
		theme: 'math',
		headerLeft: ['WorkedExampl.es', true, '/'],
		// headerRight: ['Math/Calculus/Limits/Squeeze Theorem and Special Limits', false]
		headerRight: ['Squeeze Theorem and Special Limits', false]
	};
</script>

<div class="container {topMatter.theme}">
	<header><Header {topMatter} /></header>
</div>
