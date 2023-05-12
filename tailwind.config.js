const { generateUtilities } = require('./lib/tailwindcss')

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      padding: generateUtilities(-1440, 1440),
      margin: generateUtilities(-1440, 1440),
      lineHeight: generateUtilities(-100, 100)
    }
  },
  plugins: []
}
