<script>
	let { children, levels = 1 } = $props()

	const level = $derived.by(() => {
		if (![1, 2, 3, 4].includes(levels)) {
			throw new Error(`Invalid example numbering levels: ${levels}`)
		}
		return levels
	})
</script>

<div
	class="children example-statement"
	class:_1-Example={level === 1}
	class:_2-Example={level === 2}
	class:_3-Example={level === 3}
	class:_4-Example={level === 4}
>
	{@render children()}
</div>

<style>
	.children::before {
		counter-increment: problem-counter;
		font-weight: bold;
		margin-right: 0.5em;
	}

	._1-Example::before {
		content: 'Example ' counter(section-counter) '.' counter(problem-counter) '.';
	}

	._2-Example::before {
		content: 'Example ' counter(section-counter) '.' counter(subsection-counter) '.'
			counter(problem-counter) '.';
	}

	._3-Example::before {
		content: 'Example ' counter(section-counter) '.' counter(subsection-counter) '.'
			counter(subsubsection-counter) '.' counter(problem-counter) '.';
	}

	._4-Example::before {
		content: 'Example ' counter(section-counter) '.' counter(subsection-counter) '.'
			counter(subsubsection-counter) '.' counter(subsubsubsection-counter) '.'
			counter(problem-counter) '.';
	}

	/* .example-statement {
		color: blue;
	} */
</style>
