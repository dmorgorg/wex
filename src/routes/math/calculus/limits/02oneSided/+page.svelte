<script>
	import Header from '#lib/components/Header.svelte'
	import WE from '#lib/components/WE.svelte'
	import { ki, kd } from '#lib/utilities.js'
	const levels = 2
	const topMatter = {
		theme: 'math',
		headerLeft: ['WorkedExampl.es', true, '/'],
		headerRight: ['One-sided Limits', false],
	}
</script>

<div class="container {topMatter.theme}">
	<Header {topMatter} />
	<main>
		<div>
			<a href="/math/calculus/limits/defs" class="defs">Limits: Definitions and Theorems</a>
		</div>
		<h4>1.2 One-Sided Limits</h4>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Determine {@html ki`\displaystyle \lim_{x \to 2^-} \sqrt{2-x}`} and {@html ki`\displaystyle \lim_{x \to 2^+} \sqrt{2-x}`},
			if they exist.

			{#snippet solution()}
				Note that {@html ki`f(x)=\sqrt{2-x}`} is well-defined at {@html ki`x\leqslant2`} but not for
				{@html ki`x\gt 2`}
				(This course is restricted to the real numbers so the square root of a negative number cannot
				be considered.) The left-hand limit can be found just by evaluating the function at {@html ki`x=2`}:
				{@html kd` \lim_{x \to 2^-} \sqrt{2-x}=\sqrt{2-(2)}=0`} The function {@html ki`f(x)=\sqrt{2-x}`}
				is not defined for {@html ki`x\gt 2`} so the righthand limit does not exist.
			{/snippet}

			{#snippet answer()}
				{@html kd` \lim_{x \to 2^-} \sqrt{2-x}=0, \lim_{x \to 2^+} \sqrt{2-x} \textsf{ does not exist.}`}
			{/snippet}
		</WE>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Determine {@html ki`\displaystyle \lim_{x \to 0^-} \sqrt{x^3-x}`} and {@html ki`\displaystyle \lim_{x \to 0^+} \sqrt{x^3-x}`}.

			{#snippet solution()}
				The function {@html ki`f(x)=\sqrt{x^3-x}`} is defined only on the domain for which {@html ki`x^3-x=x(x^2-1)\geqslant 0`}.

				<ol class="center">
					<li>
						Either {@html ki`x\leqslant 0 \textsf{ and } x^2\leqslant 1 
						\Rightarrow x\leqslant 0 \textsf{ and } -1\leqslant x\leqslant 1
						\Rightarrow -1\leqslant x\leqslant 0`}
					</li>
					<li>
						Or<br />
						{@html ki`x\geqslant 0 \textsf{ and } x^2\geqslant 1 
						\Rightarrow x\geqslant 0 \textsf{ and } x\leqslant -1 \textsf{ or } x\geqslant 1 
						\Rightarrow  x\geqslant 1`}
					</li>
				</ol>
				Then, the domain of {@html ki`f(x)`} is given by {@html ki`D(f)=[-1,0]\cup[1,\infty)`}.
				Notice that the limit at {@html ki`0`} can be approached from the left but not from the right.
				The left limit exists but not the right limit.
				{@html kd`
					\lim_{x \to 0^-} \sqrt{x^3-x}=\sqrt{(0)^3-(0)}=0 \\[10pt]
					\lim_{x \to 0^+} \sqrt{x^3-x} \textsf{ does not exist }
				`}
			{/snippet}

			{#snippet answer()}
				{@html kd`
					\lim_{x \to 0^-} \sqrt{x^3-x}=0 \\[10pt]
					\lim_{x \to 0^+} \sqrt{x^3-x} \textsf{ does not exist }
				`}
			{/snippet}
		</WE>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Determine {@html ki`\displaystyle \lim_{x \to 0^-} \frac{|x|}{x}`}, {@html ki`\displaystyle \lim_{x \to 0^+} \frac{|x|}{x}`}
			and {@html ki`\displaystyle \lim_{x \to 0} \frac{|x|}{x}`}.

			{#snippet solution()}
				{@html kd`
				\begin{gather*}
					\lim_{x\to 0^-}\frac{|x|}{x}=\lim_{x\to 0^-}\frac{-x}{x}=\lim_{x\to 0^-}-1=-1 \\[15pt]
					\lim_{x\to 0^+}\frac{|x|}{x}=\lim_{x\to 0^+}\frac{x}{x}=\lim_{x\to 0^+}1=1 \\[15pt]
					\lim_{x\to 0^-}\frac{|x|}{x}\ne\lim_{x\to 0^+}\frac{|x|}{x}\textsf{ so } \lim_{x \to 0} \frac{|x|}{x}\textsf{ does not exist}
				\end{gather*}
					`}
			{/snippet}

			{#snippet answer()}
				{@html kd`lim_{x \to 0^-} \frac{|x|}{x}=-1, \quad\lim_{x \to 0^+} \frac{|x|}{x}=1, \quad\textsf{ and} \displaystyle \lim_{x \to 0} \frac{|x|}{x}\textsf{ does not exist}`}
			{/snippet}
		</WE>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<!-- <WE {levels}>
			Determine {@html ki`\displaystyle \lim_{x \to 0^-} \frac{|x|}{x}`}

			{#snippet solution()}
				?
			{/snippet}

			{#snippet answer()}
				?
			{/snippet}
		</WE> -->

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Determine {@html ki`\displaystyle \lim_{x \to 2} \frac{x-2}{|x-2|}`}

			{#snippet solution()}
				{@html kd`
				\lim_{x \to 2^-} \frac{x-2}{|x-2|}=\displaystyle \lim_{x \to 2^-} \frac{x-2}{2-x}=-1 \\[5pt] 
				\lim_{x \to 2^+} \frac{x-2}{|x-2|}=\displaystyle \lim_{x \to 2^-} \frac{x-2}{x-2}=1 \\[5pt]
				\textsf{Since }\lim_{x \to 2^-} \frac{x-2}{|x-2|}\ne\lim_{x \to 2^+} \frac{x-2}{|x-2|},\: \lim_{x \to 2} \frac{x-2}{|x-2|} \textsf{ does not exist}`}
			{/snippet}

			{#snippet answer()}
				?
			{/snippet}
		</WE>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Given that {@html ki`\displaystyle f(x)=\frac{|x-3|}{x^2-9}`}, determine {@html ki`\lim_{x\to 3^-} f(x), \lim_{x\to 3^+} f(x)`}
			and {@html ki`\lim_{x\to 3} f(x)`}

			{#snippet solution()}
				&nbsp;
				{@html kd`
				\begin{gather*}
					\displaystyle\lim_{x\to 3^-} f(x) =\displaystyle\lim_{x\to 3^-} \frac{(3-x)}{(x-3)(x+3)}=\displaystyle\lim_{x\to 3^-} \frac{-\cancel{(x-3)}}{\cancel{(x-3)}(x+3)}=-\frac{1}{6}\\[15pt]
					\displaystyle\lim_{x\to 3^+} f(x) =\displaystyle\lim_{x\to 3^+} \frac{(x-3)}{(x-3)(x+3)}=\displaystyle\lim_{x\to 3^+} \frac{\cancel{(x-3)}}{\cancel{(x-3)}(x+3)}=\frac{1}{6}\\[20pt]
					\lim_{x\to 3} f(x) \textsf{ does not exist (DNE), since} \lim_{x\to 3^-} f(x) \ne \lim_{x\to 3^+} f(x) 
				\end{gather*}				
			`}
			{/snippet}

			{#snippet answer()}
				{@html kd`\displaystyle \lim_{x \to 2} (3x^2 - 5x + 2)=4`}
			{/snippet}
		</WE>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			If {@html ki`f(x)=\small\begin{cases}
   3x+2 &\text{if } c<4 \\
   5x+k &\text{if } c\geqslant 4
\end{cases}`}, find {@html ki`k`} so that {@html ki`\lim_{x\to 4} f(x)`} exists.
			{#snippet solution()}
				{@html kd`
				\lim_{x\to 4^-} f(x)= \lim_{x\to 4^-} 3x+2= 3(4)+2 = 14\\[10pt]
				\lim_{x\to 4^+} f(x)= \lim_{x\to 4^+} 5x+k= 5(4)+k = 20+k\\[10pt]
			`}
				For {@html ki`\displaystyle\lim_{x\to 4} f(x)`} to exist, we need {@html ki`\displaystyle\lim_{x\to 4^-} f(x)=\displaystyle\lim_{x\to 4^+} f(x)`},
				i.e. {@html ki`14=20+k\Rightarrow k=-6`}
			{/snippet}

			{#snippet answer()}
				{@html kd`k=-6`}
			{/snippet}
		</WE>
	</main>
</div>

<style>
	main {
		counter-reset: section-counter 1 subsection-counter 2 subsubsection-counter 0 problem-counter 0;
	}
	h4 {
		display: block;
		font-size: 120%;
		/* margin-top: 1rem; */
		/* border: 1px solid black; */
		padding-block: 1rem;
	}

	ol.center {
		/* border: 1px solid green; */
		margin-inline: auto;
		max-width: 80%;
		width: fit-content;
	}
</style>
