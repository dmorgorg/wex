<script>
	import Header from '#lib/components/Header.svelte'
	const topMatter = {
		theme: 'home',
		headerLeft: ['WorkedExampl.es', false],
		headerRight: ['A Selection', false], // statics, strength, fluids
	}
</script>

<div class="container {topMatter.theme}">
	<Header {topMatter} />
	<main>
		<ul class="alkesItalic">
			<li class="math">
				Mathematics
				<ul>
					<li>
						Calculus
						<ul>
							<li>
								Limits
								<!-- <a href="/math/calculus/limits">Limits</a> -->
								<ul>
									<li class="inline">
										<a href="/math/calculus/limits/01basic">Basic Limits</a> &mdash;
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/02infinity">Limits at Infinity</a> &mdash;
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/03trigonometric">Trigonometric Limits</a> &mdash;
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/04explog">Exponential and Logarithmic Limits</a> &mdash;
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/05Lhopital">L'Hôpital's Rule</a> &mdash;
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/06oneSided">One-sided Limits</a> &mdash;
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/07piecewise">Piecewise Functions</a> &mdash;
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/08parameters">Limits with Parameters</a> &mdash;
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/09squeeze">Squeeze Theorem and Special Limits</a>
										&mdash;
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/10multi">Multivariable Limits</a>
									</li>
								</ul>
							</li>
							<li><a href="/math/calculus/differentiation"><strike>Differentiation</strike></a></li>
							<li><a href="/math/calculus/integration"><strike>Integration</strike></a></li>
						</ul>
					</li>
				</ul>
			</li>
			<li class="statics"><strike>Statics</strike></li>
			<li class="fluids"><strike>Fluids</strike></li>
		</ul>
	</main>
</div>
