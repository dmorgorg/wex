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
						<ol>
							<li>
								Limits
								<!-- <a href="/math/calculus/limits">Limits</a> -->
								<ol>
									<li class="inline">
										<a href="/math/calculus/limits/01basic">Basic&nbsp;Limits</a>
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/02infinity">Limits&nbsp;at&nbsp;Infinity</a>
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/03trigonometric">Trigonometric&nbsp;Limits</a>
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/04explog"
											>Exponential&nbsp;and&nbsp;Logarithmic&nbsp;Limits</a
										>
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/05Lhopital">L'Hôpital's&nbsp;Rule</a>
									</li>
									<li class="inline">
										<!-- the code is for non-breaking hyphen -->
										<a href="/math/calculus/limits/06oneSided">One&#8209;sided&nbsp;Limits</a>
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/07piecewise">Piecewise&nbsp;Functions</a>
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/08parameters">Limits&nbsp;with&nbsp;Parameters</a
										>
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/09squeeze"
											>Squeeze&nbsp;Theorem&nbsp;and&nbsp;Special&nbsp;Limits</a
										>
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/10multi">Multivariable&nbsp;Limits</a>
									</li>
								</ol>
							</li>
							<li>
								Differentiation
								<ol>
									<li class="inline">
										<a href="/math/calculus/limits/01basic">Basic&nbsp;Limits</a>
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/02infinity">Limits&nbsp;at&nbsp;Infinity</a>
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/03trigonometric">Trigonometric&nbsp;Limits</a>
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/04explog"
											>Exponential&nbsp;and&nbsp;Logarithmic&nbsp;Limits</a
										>
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/05Lhopital">L'Hôpital's&nbsp;Rule</a>
									</li>
									<li class="inline">
										<!-- the code is for non-breaking hyphen -->
										<a href="/math/calculus/limits/06oneSided">One&#8209;sided&nbsp;Limits</a>
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/07piecewise">Piecewise&nbsp;Functions</a>
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/08parameters">Limits&nbsp;with&nbsp;Parameters</a
										>
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/09squeeze"
											>Squeeze&nbsp;Theorem&nbsp;and&nbsp;Special&nbsp;Limits</a
										>
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/10multi">Multivariable&nbsp;Limits</a>
									</li>
								</ol>
							</li>
							<li>
								Integration
								<ol>
									<li class="inline">
										<a href="/math/calculus/limits/01basic">Basic&nbsp;Limits</a>
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/02infinity">Limits&nbsp;at&nbsp;Infinity</a>
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/03trigonometric">Trigonometric&nbsp;Limits</a>
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/04explog"
											>Exponential&nbsp;and&nbsp;Logarithmic&nbsp;Limits</a
										>
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/05Lhopital">L'Hôpital's&nbsp;Rule</a>
									</li>
									<li class="inline">
										<!-- the code is for non-breaking hyphen -->
										<a href="/math/calculus/limits/06oneSided">One&#8209;sided&nbsp;Limits</a>
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/07piecewise">Piecewise&nbsp;Functions</a>
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/08parameters">Limits&nbsp;with&nbsp;Parameters</a
										>
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/09squeeze"
											>Squeeze&nbsp;Theorem&nbsp;and&nbsp;Special&nbsp;Limits</a
										>
									</li>
									<li class="inline">
										<a href="/math/calculus/limits/10multi">Multivariable&nbsp;Limits</a>
									</li>
								</ol>
							</li>
						</ol>
					</li>
				</ul>
			</li>
			<li class="statics"><strike>Statics</strike></li>
			<li class="fluids"><strike>Fluids</strike></li>
		</ul>
	</main>
</div>

<style lang="scss">
	main {
		ol {
			counter-reset: outer-list; /* limits, differentiation,... */
			padding-left: 2.5rem;

			ol {
				counter-reset: inline-list;
				padding-left: 0rem;
			}

			& > li {
				counter-increment: outer-list;
			}
		}
		ul {
			list-style-type: none;
			padding-left: 0;

			li {
				margin-bottom: 1rem;
				padding-left: 0rem;
				li {
					margin-bottom: 0;
					li {
						li {
							color: grey;
						}
					}
				}
			}

			ul {
				padding-left: 1rem;
				/* ul {
					padding-left: 1rem;
				} */
			}
		}

		li.inline {
			display: inline;
		}

		ol > li.inline {
			counter-increment: inline-list;

			& > a::before {
				content: counter(outer-list) '.' counter(inline-list, decimal) ':\00a0';
			}

			&:not(:last-child)::after {
				/* content: '\00a0\2014'; */
				content: '\00a0\00a0\00a0';
			}
		}

		ul li a {
			color: inherit;
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}
	}

	ul,
	ol {
		margin-block: 0;

		ul,
		ol {
			font-size: 95%;
		}
	}
</style>
