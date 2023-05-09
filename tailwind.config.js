/** @type {import('tailwindcss').Config} */

// const { generateUtilities } = require('./lib/tailwindcss')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      // padding: generateUtilities(-1440, 1440),
      // margin: generateUtilities(-1440, 1440),
      // lineHeight: generateUtilities(-100, 100)
    }
  },
  variants: {},
  plugins: []
}
