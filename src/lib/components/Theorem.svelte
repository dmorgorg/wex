<script>
	let { statement, body, levels = 1 } = $props()

	const level = $derived.by(() => {
		if (![0, 1, 2, 3, 4].includes(levels)) {
			throw new Error(`Invalid example numbering levels: ${levels}`)
		}
		return levels
	})
</script>

<blockquote
	class="theorem"
	/* No numbering at all with level 0 */
	class:_0-Theorem={level === 0}
	class:_1-Theorem={level === 1}
	class:_2-Theorem={level === 2}
	class:_3-Theorem={level === 3}
	class:_4-Theorem={level === 4}
>
	<h4 class="heading">{@render statement()}</h4>

	<section class="body">{@render body()}</section>
</blockquote>

<style lang="scss">
	:global(.math) .theorem {
		--theorem-accent: var(--math-primary);
	}

	:global(.statics) .theorem {
		--theorem-accent: var(--statics-primary);
	}

	:global(.fluids) .theorem {
		--theorem-accent: var(--fluids-primary);
	}

	:global(.math) .theorem,
	:global(.statics) .theorem,
	:global(.fluids) .theorem {
		border: 3px solid var(--theorem-accent);
		margin-inline: 0;
	}

	.theorem::before {
		color: var(--theorem-accent, var(--math-primary));
		font-family: alkesItalic;
		font-weight: bold;
		text-decoration: underline;
	}

	._1-Theorem::before,
	._2-Theorem::before,
	._3-Theorem::before,
	._4-Theorem::before {
		counter-increment: theorem-counter;
		margin-right: 0.5rem;
	}

	._0-Theorem::before {
		content: '';
	}

	._1-Theorem::before {
		content: 'Theorem ' counter(section-counter) '.' counter(theorem-counter) ':';
	}

	._2-Theorem::before {
		content: 'Theorem ' counter(section-counter) '.' counter(subsection-counter) ':'
			counter(theorem-counter) '.';
	}

	._3-Theorem::before {
		content: 'Theorem ' counter(section-counter) '.' counter(subsection-counter) ':'
			counter(subsubsection-counter) '.' counter(theorem-counter) '.';
	}

	._4-Theorem::before {
		content: 'Theorem ' counter(section-counter) '.' counter(subsection-counter) '.'
			counter(subsubsection-counter) '.' counter(subsubsubsection-counter) '.'
			counter(theorem-counter) ':';
	}

	h4.heading {
		font-size: 1rem;
		// padding-left: 0.5rem;
		display: inline;
		height: 2rem;
		// color: var(--math-primary);
		font-family: alkesLightItalic;
	}
	section.body {
		padding-top: 1rem;
		padding-bottom: 0;
		margin-bottom: 0;
	}
</style>
