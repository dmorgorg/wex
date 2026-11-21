<script>
	let { children, levels = '00' } = $props()

	const level = $derived.by(() => {
		if (!['00', '01', '10', '11'].includes(levels)) {
			throw new Error(`Invalid example numbering levels: ${levels}`)
		}
		return levels
	})
</script>

<div
	class="children"
	class:_00-Example={level === '00'}
	class:_01-Example={level === '01'}
	class:_10-Example={level === '10'}
	class:_11-Example={level === '11'}
>
	{@render children()}
</div>

<style>
	.children::before {
		counter-increment: problem-counter;
		font-weight: bold;
		margin-right: 0.5em;
	}

	._00-Example::before {
		content: 'Example ' counter(section-counter) '.' counter(problem-counter) '.';
	}

	._01-Example::before {
		content: 'Example ' counter(section-counter) '.' counter(subsubsection-counter) '.'
			counter(problem-counter) '.';
	}

	._10-Example::before {
		content: 'Example ' counter(section-counter) '.' counter(subsection-counter) '.'
			counter(problem-counter) '.';
	}

	._11-Example::before {
		content: 'Example ' counter(section-counter) '.' counter(subsection-counter) '.'
			counter(subsubsection-counter) '.' counter(problem-counter) '.';
	}
</style>
