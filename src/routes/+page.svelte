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
			<li class="math discipline">
				Mathematics
				<ul>
					<li class="subject">
						Calculus
						<ol>
							<li class="topic">
								Limits
								<ul>
									<li><a href="/math/calculus/limits/defs">Definitions and Theorems.</a></li>
									<li>
										Worked Examples:
										<ol>
											<li class="inline sub-topic">
												<a href="/math/calculus/limits/01basic">Basic&nbsp;Limits</a>
											</li>
											<li class="inline sub-topic">
												<!-- the code is for non-breaking hyphen -->
												<a href="/math/calculus/limits/02oneSided">One&#8209;sided&nbsp;Limits</a>
											</li>
											<li class="inline sub-topic">
												<a href="/math/calculus/limits/03infinity">Limits&nbsp;at&nbsp;Infinity</a>
											</li>
											<li class="inline sub-topic">
												<a href="/math/calculus/limits/03trigonometric">Trigonometric&nbsp;Limits</a
												>
											</li>
											<li class="inline sub-topic">
												<a href="/math/calculus/limits/04explog">
													Exponential&nbsp;and&nbsp;Logarithmic&nbsp;Limits
												</a>
											</li>
											<li class="inline sub-topic">
												<a href="/math/calculus/limits/05Lhopital"> L'Hôpital's&nbsp;Rule </a>
											</li>

											<li class="inline sub-topic">
												<a href="/math/calculus/limits/07piecewise">Piecewise&nbsp;Functions</a>
											</li>
											<li class="inline sub-topic">
												<a href="/math/calculus/limits/08parameters"
													>Limits&nbsp;with&nbsp;Parameters</a
												>
											</li>
											<li class="inline sub-topic">
												<a href="/math/calculus/limits/09squeeze"
													>Squeeze&nbsp;Theorem&nbsp;and&nbsp;Special&nbsp;Limits</a
												>
											</li>
											<li class="inline sub-topic">
												<a href="/math/calculus/limits/10multi">Multivariable&nbsp;Limits</a>
											</li>
										</ol>
									</li>
								</ul>
							</li>
							<li class="topic"><strike>Differentiation</strike></li>
							<li class="topic"><strike>Integration</strike></li>
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

			ul {
				// border: 1px solid red;

				li {
					// border: 1px solid green;
					padding-left: 0rem;
					margin-left: -1rem;
					// background: pink;
					li {
						margin-left: 1rem;
						display: inline;
					}
				}
				ol {
					counter-reset: inline-list;
					padding-left: 0rem;
				}
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

		li {
			&.discipline {
				font-size: 1rem;
			}
			&.subject {
				font-size: 0.95rem;
			}
			&.topic {
				font-size: 0.9rem;
			}
			&.sub-topic {
				font-size: 0.8rem;
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
