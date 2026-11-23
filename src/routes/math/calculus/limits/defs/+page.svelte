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
		<h4>Definitions and Theorems:</h4>

		<blockquote class="definition">
			<h4>(An Informal) Definition of a Limit</h4>
			If {@html ki`f`} is defined for all {@html ki`x`} near {@html ki`a`}, and if we can make {@html ki`f(x)`}
			as close to {@html ki`L`} as we want by choosing {@html ki`x`} sufficiently close to {@html ki`a`},
			we say that function {@html ki`f`} approaches the <strong>limit</strong>
			{@html ki`L`} as {@html ki`x`} approaches {@html ki`a`}. We write {@html kd`\displaystyle \lim_{x \to a} f(x)=L \quad\textsf{or}\quad f(x) \to L\textsf{ as }x \to a`}
		</blockquote>

		<blockquote class="definition">
			<h4>Definition of a Limit</h4>
			Let {@html ki`f`} be a function defined at every number in some open interval containing {@html ki`a`},
			except possibly at the number {@html ki`a`} itself. The
			<strong
				>limit of {@html ki`\bm {f(x)}`} as {@html ki`\bm x`} approaches {@html ki`\bm a`} is {@html ki`\bm L`}</strong
			>, written {@html ki`\lim_{x \to a} f(x)=L`}, if the following statement is true: For any {@html ki`\epsilon > 0`}
			there exists a {@html ki`\delta > 0`} such that
			{@html kd`0<\left|x-a\right|<\delta\Rightarrow|f(x)-L|<\delta`}
		</blockquote>

		<blockquote class="definition">
			<h4>One-sided Limits</h4>
			If {@html ki`f`} is defined for all {@html ki`x`} near {@html ki`a`}, and if we can make {@html ki`f(x)`}
			as close to {@html ki`L`} as we want by choosing {@html ki`x`} sufficiently close to {@html ki`a`},
			we say that function {@html ki`f`} approaches the <strong>limit</strong>
			{@html ki`L`} as {@html ki`x`} approaches {@html ki`a`}. We write {@html kd`\displaystyle \lim_{x \to a} f(x)=L`}
		</blockquote>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to 3} \frac{x^2 - 9}{x-3}`}

			{#snippet solution()}
				<blockquote>
					{@html ki`\large\frac{x^2 - 9}{x-3}`} is of the form {@html ki`\large\frac{0}{0}`}
					at {@html ki`x=3`}
					so straightforward evaluation of the function at {@html ki`x=3`} is not an option. But {@html ki`x-3`}
					is a factor of {@html ki`x^2-9`} so we can proceed with algebra. Remember that we are looking
					for the behaviour of {@html ki`\large\frac{x^2 - 9}{x-3}`} arbitrarily close (but not at) {@html ki`x=3`}
					so division by {@html ki`x-3`} is not division by {@html ki`0`} and still a valid operation.
				</blockquote>
				{@html kd` 
				\frac{x^2 - 9}{x-3}= \frac{(x+3)\cancel{(x-3)}}{\cancel{x-3}}\qquad(\text{for }x\ne 3) \\[5px]
				\Rightarrow\displaystyle \displaystyle \lim_{x \to 3} \frac{x^2 - 9}{x-3}=\displaystyle \lim_{x \to 3} (x+3)=(3)+3=6`}
			{/snippet}

			{#snippet answer()}
				{@html kd`\lim_{x \to 3} \frac{x^2 - 9}{x-3}=6`}
			{/snippet}
		</WE>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
	</main>
</div>
