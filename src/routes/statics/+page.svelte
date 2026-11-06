<script>
	import Header from '#lib/components/Header.svelte'
	const topMatter = {
		theme: 'statics',
		headerLeft: ['Worked Examples', true, '/'],
		headerRight: ['Statics', false], // statics, strength, fluids
	}
</script>

<div class="container {topMatter.theme}">
	<Header {topMatter} />
</div>
