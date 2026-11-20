<script>
	import favicon from '#lib/assets/favicon.svg'
	import 'katex/dist/katex.min.css'
	import '#lib/styles/global.css'
	import '#lib/styles/fonts.css'

	let { children } = $props()
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
