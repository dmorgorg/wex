<script>
	let { defn, body, levels = 1 } = $props()

	const level = $derived.by(() => {
		if (![1, 2, 3, 4].includes(levels)) {
			throw new Error(`Invalid example numbering levels: ${levels}`)
		}
		return levels
	})
</script>

<blockquote
	class="definition"
	class:_1-Example={level === 1}
	class:_2-Example={level === 2}
	class:_3-Example={level === 3}
	class:_4-Example={level === 4}
>
	<h4 class="heading">Definition: {@render defn()}</h4>

	<section class="body">{@render body()}</section>
</blockquote>

<style lang="scss">
	blockquote {
		padding: 0.5rem;
		padding-bottom: 0;
	}

	h4.heading {
		font-family: alkesLightItalic;
		font-size: 1rem;
		padding-bottom: 0.25rem;

		// padding-block: 0rem;
		// text-decoration: underline;
	}
	section.body {
		// background: lime;
		// border: 1px solid black;
		padding-bottom: 0;
		margin-bottom: 0;
	}
</style>
