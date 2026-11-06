<script>
	import Header from '#lib/components/Header.svelte'
	const topMatter = {
		theme: 'fluids',
		headerLeft: ['Worked Examples', true, '/'],
		headerRight: ['Fluids', false], // statics, strength, fluids
	}
</script>

<div class="container {topMatter.theme}">
	<Header {topMatter} />
</div>
