<script>
	let { children } = $props()
</script>

<h3>{@render children()}</h3>

<style>
	h3 {
		counter-increment: subsubsection-counter;
		counter-set: subsubsubsection-counter 0 problem-counter 0;
		margin: 1.5rem auto 0.5rem;
	}

	h3::before {
		content: counter(subsubsection-counter) ' ';
	}
</style>
