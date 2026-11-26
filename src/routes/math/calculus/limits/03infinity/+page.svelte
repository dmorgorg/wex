<script>
	import Header from '#lib/components/Header.svelte'
	import WE from '#lib/components/WE.svelte'
	import { ki, kd } from '#lib/utilities.js'
	const levels = 2
	const topMatter = {
		theme: 'math',
		headerLeft: ['WorkedExampl.es', true, '/'],
		headerRight: ['1. Limits', false], // statics, strength, fluids
	}
</script>

<div class="container {topMatter.theme}">
	<Header {topMatter} />
	<main>
		<div>
			<a href="/math/calculus/limits/defs" class="defs">Limits: Definitions and Theorems</a>
		</div>
		<h4>1.3 Limits at Infinity and Infinite Limits</h4>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<!-- <WE {levels}>
			Use the definition of an infinite limit to show that {@html ki`\displaystyle \lim_{x \to 0^+} \frac{1}{x}=+\infty`}

			{#snippet solution()}
				Divide the by the largest powers of {@html ki`x`} in the numerator and the denominator:
				{@html kd`\lim_{x \to \infty} \frac{5x^2 + 2x - 1}{3x^2 - 7}=\lim_{x \to \infty} \frac{5 + 2/x - 1/x^2}{3 - 7/x^2}= \frac{5}{3}`}
			{/snippet}

			{#snippet answer()}
				{@html ki`\displaystyle \lim_{x \to \infty} \frac{5x^2 + 2x - 1}{3x^2 - 7}=\frac{5}{3}`}
			{/snippet}
		</WE> -->
		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to \infty} \frac{5x^2 + 2x - 1}{3x^2 - 7}`}

			{#snippet solution()}
				As the numerator and denominator have the same largest powers of {@html ki`x`}, divide by
				the highest power, {@html ki`x^2`} :
				{@html kd`\lim_{x \to \infty} \frac{5x^2 + 2x - 1}{3x^2 - 7}=\lim_{x \to \infty} \frac{5 + 2/x - 1/x^2}{3 - 7/x^2}= \frac{5 + 0 - 0}{3 - 0}= \frac{5}{3}`}
			{/snippet}

			{#snippet answer()}
				{@html ki`\displaystyle \lim_{x \to \infty} \frac{5x^2 + 2x - 1}{3x^2 - 7}=\frac{5}{3}`}
			{/snippet}
		</WE>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to \infty} \frac{7x^4 - 2x}{x^5 + 3}`}

			{#snippet solution()}
				We can divide the by the largest power of {@html ki`x`} again:
				{@html kd`\lim_{x \to \infty} \frac{7x^4 - 2x}{x^5 + 3}=\lim_{x \to \infty} \frac{7/x - 2/x^4}{1 + 3/x^5}= \frac{0 - 0}{1 + 0}= 0`}
			{/snippet}

			{#snippet answer()}
				{@html ki`\displaystyle \lim_{x \to \infty} \frac{7x^4 - 2x}{x^5 + 3}=0`}
			{/snippet}
		</WE>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to \infty} \sqrt{x^2+x}`}

			{#snippet solution()}
				For large {@html ki`x`}, it appears that {@html ki`\sqrt{x^2+x}`} will behave like {@html ki`x`}.
				Let's show that.
				{@html kd`
				\begin{aligned}
					\lim_{x \to \infty} \sqrt{x^2+x} &=\lim_{x \to \infty} x\sqrt{1+1/x} \\
					& =\lim_{x \to \infty}x\cdot\lim_{x \to \infty}\sqrt{1+1/x} \\
					&=+\infty\cdot 1\\ 
					 &=+\infty
				\end{aligned}
			`}
			{/snippet}

			{#snippet answer()}
				{@html ki`\displaystyle \lim_{x \to \infty} \sqrt{x^2+x}=|\infty`}
			{/snippet}
		</WE>
		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{s \to \infty} \left(\sqrt{s^2+s}-s\right)`}

			{#snippet solution()}
				We see from the previous example that {@html ki`\displaystyle \lim_{s \to \infty} \sqrt{s^2+s}=+\infty`}.
				Also, {@html ki`\displaystyle \lim_{s \to \infty} s=+\infty`}. So our limit is of the 'form' {@html ki`\infty-\infty`}.
				Infinity is a concept, not a number, and we cannot perform arithmetic on it: We need to
				rationalize the expression.
				{@html kd`
					\begin{aligned}
						\lim_{s \to \infty} \sqrt{s^2+s}-s&=\lim_{s \to \infty} \sqrt{s^2+s}-s\cdot\frac{\sqrt{s^2+s}+s}{\sqrt{s^2+s}+s} \\
						&=\lim_{s \to \infty} \frac{(s^2+s) - s^2}{\sqrt{s^2+s}+s}\\[5pt]
						&=\lim_{s \to \infty}\frac{s}{s\left(\sqrt{1+1/s}+1\right)}\\[5pt]
						&=\lim_{s \to \infty}\frac{\cancel{s}}{\cancel{s}\left(\sqrt{1+0}+1\right)}\\
						&=\frac 12
					\end{aligned}
				`}
			{/snippet}

			{#snippet answer()}
				{@html ki`\displaystyle \lim_{s \to \infty} \left(\sqrt{s^2+s}-s\right)=\frac{1}{2}`}
			{/snippet}
		</WE>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to \infty} \frac{\sqrt{9x^2 + 1}}{x+2}`}

			{#snippet solution()}
				{@html kd`
					\begin{aligned}
						\lim_{x \to \infty} \frac{\sqrt{9x^2 + 1}}{x+2}&=\lim_{x \to \infty} \frac{3x\sqrt{1 + 1/(9x^2)}}{x+2} \\[10pt]
						&=\lim_{x \to \infty} \frac{3\sqrt{1 + 1/(9x^2)}}{1+2/x} \\[5pt]
						&= \frac{3\sqrt{1 + 0}}{1+0} \\
						&= 3 \\
					
					\end{aligned}
				`}
			{/snippet}

			{#snippet answer()}
				{@html ki`\displaystyle \lim_{x \to \infty} \frac{\sqrt{9x^2 + 1}}{x+2}=3`}
			{/snippet}
		</WE>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to -\infty} \frac{\sqrt{9x^2 + 1}}{x+2}`}

			{#snippet solution()}
				{@html kd`
					\begin{aligned}
						\lim_{x \to -\infty} \frac{\sqrt{9x^2 + 1}}{x+2}&=\frac{\sqrt{\displaystyle\lim_{x \to -\infty} 9x^2+1}}{\displaystyle\lim_{x \to -\infty} x+2} \\[15pt]
						&=\frac{\sqrt{\displaystyle\lim_{x \to -\infty} 9x^2+1}}{-\sqrt{\left(\displaystyle\lim_{x \to -\infty} x+2\right)^2}} \\[15pt]
						&=-\sqrt{\displaystyle\lim_{x \to -\infty}\frac{9x^2+1}{(x+2)^2}} \\[15pt]
						&=-\sqrt{\displaystyle\lim_{x \to -\infty}\frac{9x^2+1}{x^2+4x+4}} \\[15pt]
						&=-\sqrt{\displaystyle\lim_{x \to -\infty}\frac{9+1/x^2}{1+4/x+4/x^2}} \\[15pt]
						&=-\sqrt{\frac{9+0}{1+0+0}} \\[15pt]
						&=-3
						
						
					
					
					\end{aligned}
				`}
			{/snippet}

			{#snippet answer()}
				{@html ki`\displaystyle \lim_{x \to \infty} \frac{\sqrt{9x^2 + 1}}{x+2}=-3`}
			{/snippet}
		</WE>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to -\infty} \frac{2x-1}{\sqrt{3x^2+4x+5}}`}

			{#snippet solution()}
				{@html kd`
			\begin{aligned}
			 \lim_{x \to -\infty} \frac{2x-1}{\sqrt{3x^2+4x+5}} &=  \lim_{x \to -\infty} \frac{2x-1}{\sqrt{3x^2+4x+5}} \\[10pt]
			 &=  \lim_{x \to -\infty} \frac{2x-1}{|x|\sqrt{3+4/x+5/x^2}} \\[10pt]
			 &=  \lim_{x \to -\infty} \frac{2x-1}{-x\sqrt{3+4/x+5/x^2}} \\[10pt]
			 &=  \lim_{x \to -\infty} \frac{2-1/x}{-\sqrt{3+4/x+5/x^2}} \\[10pt]
			 &=  \frac{2-0}{-\sqrt{3+0+0}} \\[10pt]
			 &=  \frac{-2}{\sqrt{3}}
			\end{aligned} 
			`}
			{/snippet}

			{#snippet answer()}
				{@html ki`\displaystyle \lim_{x \to -\infty} \frac{2x-1}{\sqrt{3x^2+4x+5}}= \frac{-2}{\sqrt{3}}`}
			{/snippet}
		</WE>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to 3^+} \frac{x^2+2x+3}{x^2-2x-3}`}

			{#snippet solution()}
				{@html kd`
					\begin{aligned}
					\lim_{x \to 3^+} \frac{x^2+2x+3}{x^2-2x-3}&= \frac{\lim_{x \to 3^+}x^2+2x+3}{\lim_{x \to 3^+}x^2-2x-3}=\frac{18}{0}
					\end{aligned}
					
				`}
				So, the expression tends to either {@html ki`-\infty`} or to {@html ki`+\infty`}, depending
				upon whether the denominator approaches {@html ki`0`} from left side (negative values) or the
				right side (positive values).
			{/snippet}

			{#snippet answer()}
				?
			{/snippet}
		</WE>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<!-- <WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to -\infty} \frac{\sqrt{9x^2 + 1}}{x+2}`}

			{#snippet solution()}
				?
			{/snippet}

			{#snippet answer()}
				?
			{/snippet}
		</WE> -->

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
	</main>
</div>

<style>
	main {
		counter-reset: section-counter 1 subsection-counter 3 subsubsection-counter 0 problem-counter 0;
	}
	h4 {
		display: block;
		font-size: 120%;
		padding-block: 1rem;
	}
</style>
