<script>
	import Header from '#lib/components/Header.svelte'
	import Definition from '#lib/components/Definition.svelte'
	import Theorem from '#lib/components/Theorem.svelte'
	// import WE from '#lib/components/WE.svelte'
	import { ki, kd } from '#lib/utilities.js'
	let levels = 1
	const topMatter = {
		theme: 'math',
		headerLeft: ['WorkedExampl.es', true, '/'],
		headerRight: ['1. Limits', false], // statics, strength, fluids
	}
</script>

<div class="container {topMatter.theme}">
	<Header {topMatter} />
	<main>
		<h4>Definitions and Theorems:</h4>

		<Definition levels={0}>
			{#snippet defn()}
				A Limit (An Informal Definition)
			{/snippet}
			{#snippet body()}
				If {@html ki`f`} is defined for all {@html ki`x`} near {@html ki`a`}, and if we can make {@html ki`f(x)`}
				as close to {@html ki`L`} as we want by choosing {@html ki`x`} sufficiently close to {@html ki`a`},
				we say that function {@html ki`f`} approaches (or tends to) the <strong>limit</strong>
				{@html ki`L`} as {@html ki`x`} approaches (or tends to) {@html ki`a`}. We write {@html kd`\displaystyle \lim_{x \to a} f(x)=L \qquad\textsf{or}\qquad f(x) \to L\textsf{ as }x \to a`}
			{/snippet}
		</Definition>

		<Definition {levels}>
			{#snippet defn()}
				<span>A Limit</span>
			{/snippet}
			{#snippet body()}
				Let {@html ki`f`} be a function defined at every number in some open interval containing {@html ki`a`},
				except possibly at the number {@html ki`a`} itself. The
				<strong
					>limit of {@html ki`\bm {f(x)}`} as {@html ki`\bm x`} approaches {@html ki`\bm a`} is {@html ki`\bm L`}</strong
				>, written {@html ki`\lim_{x \to a} f(x)=L`}, if the following statement is true: For any {@html ki`\epsilon > 0`}
				there exists a {@html ki`\delta > 0`} such that
				{@html kd`0<\left|x-a\right|<\delta\Rightarrow|f(x)-L|<\delta`}
			{/snippet}
		</Definition>

		<Definition {levels}>
			{#snippet defn()}
				<span>One-sided Limits</span>
			{/snippet}
			{#snippet body()}
				Let {@html ki`f`} is defined for all {@html ki`x`} in some open interval {@html ki`(a, c)`}.
				Then the limit of {@html ki`f(x)`} as {@html ki` x`} approaches
				<strong>from the right</strong>
				is {@html ki`L`}
				if, for any {@html ki`\epsilon>0`}, there exists a {@html ki`\delta >0`} such that
				{@html kd`0<\left|x-a\right|<\delta\Rightarrow|f(x)-L|<\delta`}
				{@html kd`\textsf{We write }\displaystyle \lim_{x \to a^+} f(x)=L`}<br />
				Let {@html ki`f`} is defined for all {@html ki`x`} in some open interval {@html ki`(d, a)`}.
				Then the limit of {@html ki`f(x)`} as {@html ki` x`} approaches
				<strong>from the left</strong>
				is {@html ki`L`}
				if, for any {@html ki`\epsilon>0`}, there exists a {@html ki`\delta >0`} such that
				{@html kd`0<\left|x-a\right|<\delta\Rightarrow|f(x)-L|<\delta`}
				{@html kd`\textsf{We write }\displaystyle \lim_{x \to a^-} f(x)=L`}
			{/snippet}
		</Definition>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<Theorem {levels}>
			{#snippet statement()}
				<span
					>{@html ki`\lim_{x \to a} f(x)=L \Leftrightarrow \lim_{x \to a^-} f(x)=\lim_{x \to a^+} f(x)=L`}</span
				>
			{/snippet}
			{#snippet body()}
				<div class="center">
					For a limit to exist, its left and its right limit must exist and be equal.
				</div>
			{/snippet}
		</Theorem>

		<Theorem {levels}>
			{#snippet statement()}
				<span>Limit Rules</span>
			{/snippet}
			{#snippet body()}
				If {@html ki`\lim_{x\to a} f(x)=L,\,\lim_{x\to a} g(x)=M`} and {@html ki`k`} is a constant, then:
				<ol>
					<li>
						{@html ki`\displaystyle\lim_{x\to a}x=a`} and {@html ki`\displaystyle\lim_{x\to a}k=k`}
						.
					</li>
					<li>
						<strong>Sum Rule</strong>: {@html ki`\displaystyle\lim_{x\to a}\left[f(x)+g(x)\right]=L+M`}
					</li>
					<li>
						<strong>Difference Rule</strong>: {@html ki`\displaystyle\lim_{x\to a}\left[f(x)-g(x)\right]=L-M`}
					</li>
					<li>
						<strong>Product Rule</strong>: {@html ki`\displaystyle\lim_{x\to a}\:f(x)\!\cdot\! g(x)=L\!\cdot\! M`}
					</li>
					<li>
						<strong>Constant Multiple Rule</strong>: {@html ki`\displaystyle\lim_{x\to a}\:k\!\cdot\! f(x)=kL`}
					</li>
					<li>
						<strong>Quotient Rule</strong>: {@html ki`\displaystyle\lim_{x\to a}\: \frac{f(x)}{g(x)}=\frac{L}{M},\quad \text{if }M\ne 0`}
					</li>
					<li>
						<strong>Power Rule</strong>: If {@html ki`m`} is an integer and if {@html ki`n`} is a positive
						integer, then {@html kd`\lim_{x\to a}\:\left[f(x)\right]^{m/n}=L^{m/n}`} provided that {@html ki`L>0`}
						if {@html ki`n`} is even and {@html ki`L\ne 0`} if {@html ki`m< 0`}
					</li>
					<li>
						<strong>Order Rule</strong>: If {@html ki`f(x)<g(x)`} on an interval containing {@html ki`a`}
						in its interior, then
						{@html kd`L<M`}
					</li>
				</ol>
			{/snippet}
		</Theorem>

		<Theorem levels={0}>
			{#snippet statement()}
				<span>The previous theorem, rephrased:</span>
			{/snippet}
			{#snippet body()}
				<ol>
					<li value="2">
						<strong>Sum Rule</strong>: {@html ki`\displaystyle\lim_{x\to a}\left[f(x)+g(x)\right]=\displaystyle\lim_{x\to a}f(x)+\displaystyle\lim_{x\to a}g(x)`}
					</li>
					<li>
						<strong>Difference Rule</strong>: {@html ki`\displaystyle\lim_{x\to a}\left[f(x)-g(x)\right]=\lim_{x\to a}f(x)-\lim_{x\to a}g(x)`}
					</li>
					<li>
						<strong>Product Rule</strong>: {@html ki`\displaystyle\lim_{x\to a}\:f(x)\!\cdot\! g(x)=\lim_{x\to a}f(x)\cdot\lim_{x\to a}g(x)`}
					</li>
					<li>
						<strong>Constant Multiple Rule</strong>: {@html ki`\displaystyle\lim_{x\to a}\:k\!\cdot\! f(x)=k\cdot\lim_{x\to a}f(x)`}
					</li>
					<li>
						<strong>Quotient Rule</strong>: {@html ki`\displaystyle\lim_{x\to a}\:\frac{f(x)}{g(x)}=\frac{\lim_{x\to a}f(x)}{\lim_{x\to a}g(x)},\quad \text{if }\lim_{x\to a}g(x)\ne 0`}
					</li>
					<li>
						<strong>Power Rule</strong>: If {@html ki`m`} is an integer and if {@html ki`n`} is a positive
						integer, then {@html kd`\lim_{x\to a}\:\left[f(x)\right]^{m/n}=\left[\lim_{x\to a}f(x)\right]^{m/n}`}
						provided that {@html ki`L>0`}
						if {@html ki`n`} is even and {@html ki`L\ne 0`} if {@html ki`m< 0`}
					</li>
					<li>
						<strong>Order Rule</strong>: If {@html ki`f(x)<g(x)`} on an interval containing {@html ki`a`}
						in its interior, then
						{@html kd`\lim_{x\to a}f(x)<\lim_{x\to a}g(x)`}
					</li>
				</ol>
			{/snippet}
		</Theorem>

		<Definition {levels}>
			{#snippet defn()}
				A Polynomial
			{/snippet}
			{#snippet body()}
				A <strong>polynomial</strong> in {@html ki`x`} is a function of the form
				{@html kd`P(x) = a_n x^n + a_{n-1} x^{n-1}+ a_{n-2} x^{n-2}+\ldots+a_1 x+a_0`}
				where {@html ki`a_n, a_{n-1}, a_{n-2},\ldots,a_1,a_0`} are constants and {@html ki`a_n\ne 0`}.
				The number {@html ki`n`} is the <strong>degree</strong> of the polynomial {@html ki`P(x)`}.
				A quotient {@html ki`P(x)/Q(x)`} of two polynomials is called a
				<strong>rational function</strong>.
			{/snippet}
		</Definition>

		<Theorem {levels}>
			{#snippet statement()}
				Limits of Polynomials and Rational Functions
			{/snippet}
			{#snippet body()}
				<ol class="">
					<li>
						If {@html ki`P(x)`} is a polynomial and {@html ki`a`} any real number, then {@html ki`\displaystyle\lim_{x\to a}P(x)=P(a)`}
					</li>
					<li>
						If {@html ki`P(x)`} and {@html ki`Q(x)`} are polynomials and {@html ki`Q(a)\ne 0`}, then {@html ki`\displaystyle\lim_{x\to a}\frac{P(x)}{Q(x)}=\frac{P(a)}{Q(a)}`}
					</li>
				</ol>
			{/snippet}
		</Theorem>

		<Theorem {levels}>
			{#snippet statement()}
				The Squeeze Theorem
			{/snippet}
			{#snippet body()}
				If {@html ki`f(x)\le g(x)\le h(x)`} for all {@html ki`x`} in some open interval interval containing
				{@html ki`a`}, except possibly at {@html ki`a`} itself, and if
				{@html kd`\lim_{x\to a}f(x)=\lim_{x\to a}h(x)=L`} then {@html kd`\lim_{x\to a}g(x)=L`}
				(Similar results hold for one-sided limits.)
			{/snippet}
		</Theorem>

		<Definition levels={0}>
			{#snippet defn()}
				Limits at Infinity (An Informal Definition)
			{/snippet}
			{#snippet body()}
				If {@html ki`f`} is defined on {@html ki`(a,\infty)`} and we can make {@html ki`f`} as close
				to {@html ki`L`} as we want by choosing a sufficiently large , we say that function {@html ki`f`}
				approaches (or tends to) the <strong>limit</strong>
				{@html ki`L`} as {@html ki`x`} approaches (or tends to) infinity. We write {@html kd`\lim_{x \to \infty} f(x)=L `}
				Similarly, if {@html ki`f`} is defined on {@html ki`(-\infty,b)`} and we can make {@html ki`f`}
				as close to {@html ki`M`} as we want by choosing a negative {@html ki`x`} sufficiently large
				in absolute value of {@html ki`x`}, we say that function {@html ki`f`}
				approaches (or tends to) the <strong>limit</strong>
				{@html ki`L`} as {@html ki`x`} approaches (or tends to) negative infinity. We write {@html kd`\lim_{x \to -\infty} f(x)=M `}
			{/snippet}
		</Definition>

		<Definition {levels}>
			{#snippet defn()}
				Infinite Limits
			{/snippet}
			{#snippet body()}
				Let {@html ki`f`} be a function defined at every number in some open interval containing {@html ki`f`},
				(except possibly at {@html ki`a`} itself). As {@html ki`x`} approaches {@html ki`a`}, {@html ki`f(x)`}
				<strong>tends to infinity</strong>
				if, for any {@html ki`N>0`}, there exists a {@html ki`\delta>0`}
				such that {@html ki`0<|x-a|<\delta \Rightarrow f(x)>N`}. <br />We write {@html ki`\displaystyle\lim_{x\to a}F(x)=+\infty`}.<br
				/><br />
				Let {@html ki`f`} be a function defined at every number in some open interval containing {@html ki`f`},
				(except possibly at {@html ki`a`} itself). As {@html ki`x`} approaches {@html ki`a`}, {@html ki`f(x)`}
				<strong>tends to negative infinity</strong>
				if, for any {@html ki`N<0`}, there exists a {@html ki`\delta>0`}
				such that {@html ki`0<|x-a|<\delta \Rightarrow f(x)<N`}. <br />We write {@html ki`\displaystyle\lim_{x\to a}F(x)=-\infty`}.<br
				/>
			{/snippet}
		</Definition>

		<Theorem {levels}>
			{#snippet statement()}
				{@html ki`\textsf{For any positive integer }r`}
			{/snippet}
			{#snippet body()}
				<ol>
					<li>
						{@html ki`\displaystyle\lim_{x\to 0^+} \frac{1}{x^r}=+\infty`}
					</li>
					<li>
						{@html ki`\displaystyle\lim_{x\to 0^-} \frac{1}{x^r}=
						\begin{cases}
							-\infty &\textsf{if } r \textsf{ is odd} \\
							+\infty &\textsf{if } r \textsf{ is even}
						\end{cases}
						`}
					</li>
				</ol>
			{/snippet}
		</Theorem>
	</main>
</div>

<style>
	main {
		counter-reset: section-counter 1 subsection-counter 0 subsubsection-counter 0 problem-counter 0
			theorem-counter 0;
	}
	ol {
		width: fit-content;
		margin-inline: auto;
		li {
			margin-bottom: 0.75rem;
		}
	}
	h4 {
		font-size: 120%;
	}
	.center {
		text-align: center;
	}
</style>
