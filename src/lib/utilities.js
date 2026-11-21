import katex from 'katex'

// ki and kd are tag functions: String.raw keeps single backslashes as typed,
// e.g. ki`\lim_{x \to 3} (2x + 1)`. Calling them with a plain string is not supported.

// inline math, e.g. {@html ki`x^2 + 1`}
// @ts-ignore
export const ki = (strings, ...values) => katex.renderToString(String.raw(strings, ...values))

// display (centred, own line) math, e.g. {@html kd`\lim_{x \to 3} (2x + 1)`}
// @ts-ignore
export const kd = (strings, ...values) =>
	katex.renderToString(String.raw(strings, ...values), { displayMode: true })

// // $$...$$ is display math, $...$ is inline math, and \$ is a literal dollar sign
// const MATH = /\\\$|\$\$([\s\S]+?)\$\$|\$((?:\\[\s\S]|[^$\\])+?)\$/g

// // text mixed with math, e.g. km`Evaluate $\lim_{x \to 3} (2x + 1)$.`
// // The text itself is treated as HTML, and a $ must not be directly followed by { (JS template syntax)
// // @ts-ignore
// export const km = (strings, ...values) =>
// 	String.raw(strings, ...values).replace(MATH, (match, display, inline) => {
// 		if (match === '\\$') return '$'
// 		return display === undefined
// 			? katex.renderToString(inline)
// 			: katex.renderToString(display, { displayMode: true })
// 	})
