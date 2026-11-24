<script>
	let { defn, body, levels = 1 } = $props()

	const level = $derived.by(() => {
		if (![0, 1, 2, 3, 4].includes(levels)) {
			throw new Error(`Invalid example numbering levels: ${levels}`)
		}
		return levels
	})
</script>

<blockquote
	class="definition"
	/* No numbering at all with level 0 */
	class:_0-Definition={level === 0}
	class:_1-Definition={level === 1}
	class:_2-Definition={level === 2}
	class:_3-Definition={level === 3}
	class:_4-Definition={level === 4}
>
	<h4 class="heading">{@render defn()}</h4>

	<section class="body">{@render body()}</section>
</blockquote>

<style lang="scss">
	:global(.math) .definition {
		--definition-accent: var(--math-primary);
	}

	:global(.statics) .definition {
		--definition-accent: var(--statics-primary);
	}

	:global(.fluids) .definition {
		--definition-accent: var(--fluids-primary);
	}

	:global(.math) .definition,
	:global(.statics) .definition,
	:global(.fluids) .definition {
		border: 3px solid var(--definition-accent);
		margin-inline: 0;
	}

	.definition::before {
		color: var(--definition-accent, var(--math-primary));
		font-family: alkesItalic;
		font-weight: bold;
		text-decoration: underline;
	}

	._1-Definition::before,
	._2-Definition::before,
	._3-Definition::before,
	._4-Definition::before {
		counter-increment: problem-counter;
		margin-right: 0.5rem;
	}

	._0-Definition::before {
		content: '';
	}

	._1-Definition::before {
		content: 'Definition ' counter(section-counter) '.' counter(problem-counter) ':';
	}

	._2-Definition::before {
		content: 'Definition ' counter(section-counter) '.' counter(subsection-counter) ':'
			counter(problem-counter) '.';
	}

	._3-Definition::before {
		content: 'Definition ' counter(section-counter) '.' counter(subsection-counter) ':'
			counter(subsubsection-counter) '.' counter(problem-counter) '.';
	}

	._4-Definition::before {
		content: 'Definition ' counter(section-counter) '.' counter(subsection-counter) '.'
			counter(subsubsection-counter) '.' counter(subsubsubsection-counter) '.'
			counter(problem-counter) ':';
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
