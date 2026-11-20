import katex from 'katex'

// inline math, e.g. {@html ki('x^2 + 1')}
export const ki = (tex) => katex.renderToString(tex)

// display (centred, own line) math, e.g. {@html kd('\\lim_{x \\to 3} (2x + 1)')}
export const kd = (tex) => katex.renderToString(tex, { displayMode: true })
