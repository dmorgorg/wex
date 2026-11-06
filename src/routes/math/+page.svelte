<script>
	import Header from '#lib/components/Header.svelte'
	const topMatter = {
		theme: 'math',
		headerLeft: ['Worked Examples', true, '/'],
		headerRight: ['Mathematics', false], // statics, strength, fluids
	}
</script>

<div class="container {topMatter.theme}">
	<Header {topMatter} />
</div>
