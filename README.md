# nextjs boilerplate with tailwindcss

[![Styling](https://github.com/Se-Gl/nextjs-boilerplate-tailwind/actions/workflows/style.yml/badge.svg)](https://github.com/Se-Gl/nextjs-boilerplate-tailwind/actions/workflows/style.yml)
[![Cypress Base](https://github.com/Se-Gl/nextjs-boilerplate-tailwind/actions/workflows/cypress.yml/badge.svg)](https://github.com/Se-Gl/nextjs-boilerplate-tailwind/actions/workflows/cypress.yml)
[![Release](https://github.com/Se-Gl/nextjs-boilerplate-tailwind/actions/workflows/release.yml/badge.svg)](https://github.com/Se-Gl/nextjs-boilerplate-tailwind/actions/workflows/release.yml)

## Getting Started

Install the dependencies

```bash
# install all dependencies
npm install
# set-up husky
npm run prepare

# ⚠️ If error, install husky and cypress manually
npm install husky --save-dev
npm install --save-dev cypress
```

Run the development server:

```bash
# start the localhost server and cypress
npm run e2e

# backup
npm run dev
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- GitHub: head to the repository -> Actions -> General and under `Actions permissions` set `Allow all actions and reusable workflows` and under `Workflow permissions` make sure `Read and write permissions` are enabled.

### cypress commands

```bash
# open cypress GUI
npm run cypress:open
# run all cypress tests in the console
npm run cypress:run
```

### esLint commands

```bash
# default nextjs eslint command
npm run lint
# fix eslint errors by running prettier
npm run prettier
```

### Github actions

- In order to follow best practices, simple github actions have been implemented.
- This Project checks for EsLint errors (according to our .eslintrs.json rules) before pushing to the repo.
- This Project checks the code for prettier violations (according to our .prettierrc file) before pushing to the repo.
- This Project checks if the build process is completed successfully before pushing to the repo.
- This Project tests the code with cypress before pushing to the repo.

### Styling

⚠️ tailwindcss should be used primarily. For special cases or animations SCSS can be used.

Use the generateUtilities function to generate a range of numbers. Props: `start:number, end:number, unit = 'px':string`. Enter the start number, the end number and the CSS unit in sequenze.

```js
// tailwind.config.js
...
{
    theme: {
    extend: {
      margin: generateUtilities(-100, 100, '%') // will generate margin from -100% to 100%
      padding: generateUtilities(-100, 100, 'px') // will generate padding from -100px to 100px
    }
  },
}
...
```

Example:

- Negative values: `-mt-20%`
- Positive values: `mb-50%`
- Zero values: `pr-0px`

### SCSS Structure - 7:1

Keeping the architecture consistent and meaningful is even more of a challenge.

A common and effective modular method for structuring Sass projects is the 7-1 pattern. This approach will be used in the development process of this project.

A possible structure could look as follows _(as of May 2023)_

```txt
sass/
|
|– abstracts/
|   |– _index.scss        # Sass Index File
|
|– base/
|   |– _index.scss        # Sass Index File
|   |– _reset.scss        # Basic browser styling reset file
|
|– components/
|   |– _index.scss        # Sass Index File
|
|– layout/
|   |– _index.scss        # Sass Index File
|
|– pages/
|   |– _index.scss        # Custom Page Styles
|
|– themes/
|   |– _index.scss        # Sass Index File
|
|– vendors/
|   |– _index.scss        # 3rd Party Solutions
|
 – globals.scss              # Main Sass Input File
```

## Contribute: We Use Semantic Release

We use semantic versioning for commit messages.
Check the [contributing file](/.github/contributing.md) for more details.

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs or added new dependencies, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Use semantic versioning for commits.
7. Issue a pull request!

For commit messages, use semantig writing:

| Commit                                                                                        |      Usage       | Version |
| --------------------------------------------------------------------------------------------- | :--------------: | ------- |
| fix(your-change): a small change, p.e. fixed a component, readme or test                      |   Fix Release    | v.0.0.1 |
| feat(your-change): a new feature, p.e. test suite for a component                             | Feature Release  | v.0.1.0 |
| perf(your-change): a breaking change or hotfix \n BREAKING CHANGE: p.e. added a new component | Breaking Release | v.1.0.0 |

A breaking change must be written in the footer. p.e.

`perf(your-change): a breaking change or hotfix

BREAKING CHANGE: First line of explanation
Other lines of explanations`

Possible commit values are:

```json
[
  'build',
  'chore',
  'ci',
  'docs',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  'style',
  'test'
];
```

### Basic Frontend Libraries

|                                                            | Stars                                                                                                | Bundle size                                                                                                                               | Maintained | Dev- Mode |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------- | --------- |
| [next](https://www.npmjs.com/package/next)                 | ![GitHub stars](https://img.shields.io/github/stars/vercel/next.js.svg?label=%F0%9F%8C%9F)           | N/A                                                                                                                                       | ✅         | ➖        |
| [sass](https://www.npmjs.com/package/sass)                 | ![GitHub stars](https://img.shields.io/github/stars/sass/dart-sass.svg?label=%F0%9F%8C%9F)           | [![Bundle size](https://badgen.net/bundlephobia/minzip/sass/?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=sass)                 | ✅         | ✅        |
| [tailwindcss](https://www.npmjs.com/package/tailwindcss)   | ![GitHub stars](https://img.shields.io/github/stars/tailwindlabs/tailwindcss.svg?label=%F0%9F%8C%9F) | [![Bundle size](https://badgen.net/bundlephobia/minzip/tailwindcss/?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=tailwindcss)   | ✅         | ✅        |
| [postcss](https://www.npmjs.com/package/postcss)           | ![GitHub stars](https://img.shields.io/github/stars/postcss/postcss.svg?label=%F0%9F%8C%9F)          | [![Bundle size](https://badgen.net/bundlephobia/minzip/postcss/?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=postcss)           | ✅         | ✅        |
| [autoprefixer](https://www.npmjs.com/package/autoprefixer) | ![GitHub stars](https://img.shields.io/github/stars/postcss/autoprefixer.svg?label=%F0%9F%8C%9F)     | [![Bundle size](https://badgen.net/bundlephobia/minzip/autoprefixer/?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=autoprefixer) | ✅         | ✅        |

### Testing Libraries

|                                                  | Stars                                                                                          | Bundle size                                                                                                                   | Maintained | Dev- Mode |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ---------- | --------- |
| [cypress](https://www.npmjs.com/package/cypress) | ![GitHub stars](https://img.shields.io/github/stars/cypress-io/cypress.svg?label=%F0%9F%8C%9F) | [![Bundle size](https://badgen.net/bundlephobia/minzip/cypress?label=%F0%9F%92%BE)](https://bundlephobia.com/package/cypress) | ✅         | ✅        |

### Automated Workflow Libraries

|                                                                                                  | Stars                                                                                                         | Bundle size                                                                                                                                                                    | Maintained | Dev- Mode |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- | --------- |
| [prettier](https://www.npmjs.com/package/prettier)                                               | ![GitHub stars](https://img.shields.io/github/stars/prettier/prettier.svg?label=%F0%9F%8C%9F)                 | [![Bundle size](https://badgen.net/bundlephobia/minzip/prettier/?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=prettier)                                              | ✅         | ✅        |
| [eslint](https://www.npmjs.com/package/eslint)                                                   | ![GitHub stars](https://img.shields.io/github/stars/eslint/eslint.svg?label=%F0%9F%8C%9F)                     | [![Bundle size](https://badgen.net/bundlephobia/minzip/eslint/?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=eslint)                                                  | ✅         | ✅        |
| [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)                   | ![GitHub stars](https://img.shields.io/github/stars/prettier/eslint-config-prettier.svg?label=%F0%9F%8C%9F)   | [![Bundle size](https://badgen.net/bundlephobia/minzip/eslint-config-prettier?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=eslint-config-prettier)                   | ✅         | ✅        |
| [husky](https://www.npmjs.com/package/husky)                                                     | ![GitHub stars](https://img.shields.io/github/stars/typicode/husky.svg?label=%F0%9F%8C%9F)                    | [![Bundle size](https://badgen.net/bundlephobia/minzip/husky?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=husky)                                                     | ✅         | ✅        |
| [lint-staged](https://www.npmjs.com/package/lint-staged)                                         | ![GitHub stars](https://img.shields.io/github/stars/okonet/lint-staged.svg?label=%F0%9F%8C%9F)                | [![Bundle size](https://badgen.net/bundlephobia/minzip/lint-staged?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=lint-staged)                                         | ✅         | ✅        |
| [semantic-release](https://www.npmjs.com/package/semantic-release)                               | ![GitHub stars](https://img.shields.io/github/stars/semantic-release/semantic-release.svg?label=%F0%9F%8C%9F) | [![Bundle size](https://badgen.net/bundlephobia/minzip/semantic-release/?label=%F0%9F%92%BE)](https://bundlephobia.com/package/semantic-release)                               | ✅         | ✅        |
| [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli)                                 | ![GitHub stars](https://img.shields.io/github/stars/conventional-changelog/commitlint.svg?label=%F0%9F%8C%9F) | [![Bundle size](https://badgen.net/bundlephobia/minzip/@commitlint/cli/?label=%F0%9F%92%BE)](https://bundlephobia.com/package/@commitlint/cli)                                 | ✅         | ✅        |
| [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional) | ![GitHub stars](https://img.shields.io/github/stars/conventional-changelog/commitlint.svg?label=%F0%9F%8C%9F) | [![Bundle size](https://badgen.net/bundlephobia/minzip/@commitlint/config-conventional/?label=%F0%9F%92%BE)](https://bundlephobia.com/package/@commitlint/config-conventional) | ✅         | ✅        |

### Sources
