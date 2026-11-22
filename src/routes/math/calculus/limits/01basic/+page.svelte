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
		<h4>1.1 Basic Limits</h4>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to 2} (3x^2 - 5x + 2)`}

			{#snippet solution()}
				<blockquote>
					Since {@html ki`3x^2 - 5x + 2`} is continuous everywhere, we can simply evaluate the expression
					at {@html ki`x=2`}
				</blockquote>
				{@html kd`\displaystyle \lim_{x \to 2} (3x^2 - 5x + 2)=3(2)^2 -5(2)+2 = 4`}
			{/snippet}

			{#snippet answer()}
				{@html kd`\displaystyle \lim_{x \to 2} (3x^2 - 5x + 2)=4`}
			{/snippet}
		</WE>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to -2} x(x+2)(x+4)`}

			{#snippet solution()}
				<blockquote>
					{@html ki`f(x)=x(x+2)(x+4)`} is continuous everywhere; evaluate at {@html ki` x=-2`}
				</blockquote>
				{@html kd`\displaystyle \lim_{x \to -2} x(x+2)(x+4) = (-2)((-2)+2)((-2)+4)= (-2)(0)(2)=0`}
			{/snippet}

			{#snippet answer()}
				{@html kd`\displaystyle \lim_{x \to -2} x(x+2)(x+4)=0`}
			{/snippet}
		</WE>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{t \to -3} \left(\frac{t^2}{6-t}\right)`}

			{#snippet solution()}
				<blockquote>
					{@html ki` \large\frac{t^2}{6-t}`} is continuous everywhere except at {@html ki` t=6`};
					evaluate at {@html ki` x=-3`}
				</blockquote>
				{@html kd`\displaystyle \lim_{t \to -3} \left(\frac{t^2}{6-t}\right)=\frac{(-3)^2}{6-(-3)} =1 `}
			{/snippet}

			{#snippet answer()}
				{@html kd`\displaystyle \lim_{t \to -3} \left(\frac{t^2}{6-t}\right)=1`}
			{/snippet}
		</WE>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{s \to 3} \left(\frac{1}{9-s^2}\right)`}

			{#snippet solution()}
				<blockquote>
					{@html ki` \large\frac{1}{9-s^2}`} is not defined at {@html ki` s=3`} and there is no algebraic
					manipulation that can make into a form that exists at {@html ki` s=3`}. The limit does not
					exist (D.N.E.)
				</blockquote>
				{@html kd`\lim_{s \to 3} \left(\frac{1}{9-s^2}\right)\textsf{does not exist}`}
			{/snippet}

			{#snippet answer()}
				{@html kd`\lim_{s \to 3} \left(\frac{1}{9-s^2}\right)\textsf{does not exist}`}
			{/snippet}
		</WE>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to 0} \left(\frac{x}{\sqrt{3+x}-\sqrt{3-x}}\right)`}

			{#snippet solution()}
				<blockquote>
					{@html ki` \Large\frac{x}{\sqrt{3+x}-\sqrt{3-x}}`} is not defined at {@html ki` x=0`} so use
					a suitable algebraic manipulation to find an equivalent (except at {@html ki` x=0`})
					expression that does exist at {@html ki` x=0`}
				</blockquote>
				{@html kd`
				\begin{aligned}
					\frac{x}{\sqrt{3+x}-\sqrt{3-x}} &=\frac{x}{\sqrt{3+x}-\sqrt{3-x}}\cdot\frac{\sqrt{3+x}+\sqrt{3-x}}{\sqrt{3+x}+\sqrt{3-x}} \\[0.75em]
					&= \frac{x(\sqrt{3+x}+\sqrt{3-x})}{(3+x)-(3-x)}\\[0.75em]
					&= \frac{\cancel{x}(\sqrt{3+x}+\sqrt{3-x})}{2\cancel{x}}\qquad\textsf{for }x\ne 0\\[0.75em]
					\displaystyle \lim_{x \to 0} \left(\frac{x}{\sqrt{3+x}-\sqrt{3-x}}\right) &= \lim_{x \to 0}\frac{\sqrt{3+x}+\sqrt{3-x}}{2}=\frac{\sqrt{3+(0)}+\sqrt{3-(0)}}{2}=\sqrt{3}
				\end{aligned}`}
			{/snippet}

			{#snippet answer()}
				{@html kd`\displaystyle \lim_{x \to 0} \left(\frac{x}{\sqrt{3+x}-\sqrt{3-x}}\right) =\sqrt{3}`}
			{/snippet}
		</WE>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to -1} \frac{x^2 - 1}{x+1}`}

			{#snippet solution()}
				<blockquote>
					{@html ki`\large\frac{x^2 - 1}{x+1}`} is of the form {@html ki`\large\frac{0}{0}`}
					at {@html ki`x=-1`}
					so straightforward evaluation of {@html ki`\large\frac{x^2 - 1}{x+1}`} is not an option. Notice,
					however, that {@html ki`x^2 - 1`}
					is divisible by {@html ki`x+1`} and, secondly, that division by {@html ki`x+1`} is legal since
					{@html ki`x`} can get arbitrarily close to {@html ki`-1`} but never quite reaches it and so
					{@html ki`x+1`}
					is never equal to {@html ki`0`}.
				</blockquote>
				{@html kd`
					\frac{x^2-1}{x+1}= \frac{(\cancel{x+1})(x-1)}{\cancel{x+1}}=x-1\qquad(\text{for }x\ne -1)\\[5px]
					\Rightarrow\displaystyle \lim_{x \to -1} \frac{x^2 - 1}{x+1}=\lim_{x \to -1}(x-1)=(-1)-1=-2
					`}
			{/snippet}

			{#snippet answer()}
				{@html kd`\displaystyle \lim_{x \to -1} \frac{x^2 - 1}{x+1}=-2`}
			{/snippet}
		</WE>
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
		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to 0} \frac{\sqrt{x+4} - 2}{x}`}

			{#snippet solution()}
				{@html kd`
				\begin{aligned} 
				\frac{\sqrt{x+4} - 2}{x} &= \frac{\sqrt{x+4} - 2}{x} \cdot \frac{\sqrt{x+4} + 2}{\sqrt{x+4} + 2} \\[5px]
				&= \frac{(x+4) - 4}{x(\sqrt{x+4} + 2)} \\[5px]
				&= \frac{\cancel{x}}{\cancel{x}(\sqrt{x+4} + 2)} \\[5px]
				\Rightarrow \lim_{x \to 0} \frac{\sqrt{x+4} - 2}{x}&=\lim_{x \to 0} \frac{1}{\sqrt{x+4} + 2}=\frac{1}{4}
				\end{aligned}`}
			{/snippet}

			{#snippet answer()}
				{@html kd`\lim_{x \to 0} \frac{\sqrt{x+4} - 2}{x}=\frac{1}{4}`}
			{/snippet}
		</WE>
		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to 1} \frac{x^3 - 1}{x-1}`}

			{#snippet solution()}
				{@html kd`
				\begin{aligned} 
					\frac{x^3-1}{x-1} &= \frac{(\cancel{x-1})(x^2+x+1)}{\cancel{x-1}} \\[5px]					
					\Rightarrow \lim_{x \to 1} \frac{x^3 - 1}{x-1}&=\lim_{x \to 1} (x^2+x+1)=(1)^2+(1)+1=3
				\end{aligned}
				`}
			{/snippet}

			{#snippet answer()}
				{@html kd`\lim_{x \to 1} \frac{x^3 - 1}{x-1}=3`}
			{/snippet}
		</WE>
		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to 4} \frac{x-4}{\sqrt{x} - 2}`}

			{#snippet solution()}
				{@html kd`
				\begin{aligned} 
					\frac{x-4}{\sqrt{x} - 2} &=\frac{(\cancel{\sqrt{x} - 2})(\sqrt{x} + 2)}{\cancel{\sqrt{x} - 2}}=\sqrt{x} + 2\\[5px]					
					\Rightarrow\lim_{x \to 4} \frac{x-4}{\sqrt{x} - 2} &= \lim_{x \to 4} (\sqrt{x} + 2)=\sqrt{4} + 2=4
				\end{aligned}
				`}
			{/snippet}

			{#snippet answer()}
				{@html kd`\lim_{x \to 4} \frac{x-4}{\sqrt{x} - 2}=4`}
			{/snippet}
		</WE>
		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to 0} \frac{(x+1)^2 - 1}{x}`}

			{#snippet solution()}
				<blockquote>
					Again, we have the form {@html ki`\frac{0}{0}`} at {@html ki`x=0`}. But expanding {@html ki`(x+1)^2`}
					yields a numerator that has a factor {@html ki`x`} in common with the denominator.
				</blockquote>
				{@html kd`
				\begin{aligned} 
					\frac{(x+1)^2 - 1}{x} &=\frac{(x^2+2x+\cancel{1}) - \cancel{1}}{x}=\frac{x^2+2x}{x}=\frac{\cancel{x}(x+2)}{\cancel{x}} \qquad(\text{for }x\ne 0)\\[5px]					
					\Rightarrow\lim_{x \to 0}\frac{(x+1)^2 - 1}{x} &=\lim_{x \to 0}(x+2) =2
				\end{aligned}
				`}
			{/snippet}

			{#snippet answer()}
				{@html kd`\lim_{x \to 0} \frac{(x+1)^2 - 1}{x}=2`}
			{/snippet}
		</WE>
		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to 2} \frac{x^2 - 4x + 4}{x-2}`}

			{#snippet solution()}
				{@html kd`
				\begin{aligned} 
					\frac{x^2 - 4x + 4}{x-2} &=\frac{(x-2)^2}{x-2}=x-2\qquad(\text{for }x\ne 2)\\[5px]					
					\Rightarrow\lim_{x \to 2} \frac{x^2 - 4x + 4}{x-2} &=\lim_{x \to 2} (x-2) =0
				\end{aligned}
				`}
			{/snippet}

			{#snippet answer()}
				{@html kd`\lim_{x \to 2} \frac{x^2 - 4x + 4}{x-2}=0`}
			{/snippet}
		</WE>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{x \to -2} \left(\frac{x^2-x-6}{x^2+7x+10}\right)`}

			{#snippet solution()}
				<blockquote>
					{@html ki`\large\frac{x^2-x-6}{x^2+7x+10}`} is undefined at {@html ki`x=-2`} so find common
					factors in the numerator and the denominator, and cancel these common factors.
				</blockquote>
				{@html kd`
				\begin{aligned} 
					\frac{x^2-x-6}{x^2+7x+10} &=\frac{\cancel{(x+2)}(x-3)}{\cancel{(x+2)}(x+5)}=\frac{x-3}{x+5}\qquad(\text{for }x\ne -2)\\[5px]					
					\Rightarrow\lim_{x \to -2} \frac{x^2-x-6}{x^2+7x+10} &=\lim_{x \to -2} \frac{x-3}{x+5}=\frac{(-2)-3}{(-2)+5} =-\frac{5}{3}
				\end{aligned}
				`}
			{/snippet}

			{#snippet answer()}
				{@html kd`\large\displaystyle \lim_{x \to -2} \frac{x^2-x-6}{x^2+7x+10}=-\frac{5}{3}`}
			{/snippet}
		</WE>
		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<WE {levels}>
			Evaluate {@html ki`\displaystyle \lim_{y \to 1} \frac{y+\sqrt{y}-2}{y+2\sqrt{y}-3}`}

			{#snippet solution()}
				<blockquote>
					{@html ki`\large\frac{y+\sqrt{y}-2}{y+2\sqrt{y}-3}`} is of the form {@html ki`\Large\frac{0}{0}`}
					at {@html ki`x=1`}. Factor the numerator and denominator and cancel where possible to
					evaluate at {@html ki`x=1`}.
				</blockquote>
				{@html kd`
				\begin{gather*} 
					\frac{y+\sqrt{y}-2}{y+2\sqrt{y}-3} =\frac{\cancel{(\sqrt{y}-1)}(\sqrt{y}+2)}{\cancel{(\sqrt{y}-1)}(\sqrt{y}+3)}=\frac{\sqrt{y}+2}{\sqrt{y}+3}\qquad(\text{for }y\ne 1)\\[15px]					
					\Rightarrow\lim_{x \to 1}\frac{y+\sqrt{y}-2}{y+2\sqrt{y}-3} =\lim_{x \to 1} \frac{\sqrt{y}+2}{\sqrt{y}+3} =\frac{3}{4}
				\end{gather*}
				`}
			{/snippet}

			{#snippet answer()}
				{@html kd`\displaystyle \lim_{x \to 1} \frac{y+\sqrt{y}-2}{y+2\sqrt{y}-3}=\frac{3}{4}`}
			{/snippet}
		</WE>

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

		<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
	</main>
</div>

<style>
	main {
		counter-reset: section-counter 1 subsection-counter 1 subsubsection-counter 0 problem-counter 0;
	}
</style>
