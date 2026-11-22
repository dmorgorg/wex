# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@1.3.0 create --template minimal --no-types --add enhanced-img sveltekit-adapter="adapter:static" mdsvex --install npm wex
```

## Adding features

Add features to your project with `sv add`:

```sh
npx sv add
```

For example, to add Tailwind CSS:

```sh
npx sv add tailwindcss
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

## Worked-example numbering

Set `levels` on `WE` to the number of section components before the example number:
1 for section, 2 for section and subsection, 3 for section through subsubsection,
or 4 to include subsubsubsection. It defaults to 1.

Initialize the relevant CSS counters on an ancestor shared by the examples, as in
[`01basic/+page.svelte`](src/routes/math/calculus/limits/01basic/+page.svelte).
The counters are `section-counter`, `subsection-counter`, `subsubsection-counter`,
`subsubsubsection-counter`, and `problem-counter`. Reset `problem-counter` when
starting a new group. `SubsubsectionHeader` increments the subsubsection counter
and resets the subsubsubsection and example counters.
