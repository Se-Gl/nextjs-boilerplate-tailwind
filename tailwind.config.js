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
      width: generateUtilities(-1440, 1440) && generateUtilities(0, 100, '%') && generateUtilities(0, 110, 'vw'),
      height: generateUtilities(-1440, 1440) && generateUtilities(0, 100, '%') && generateUtilities(0, 110, 'vh'),
      fontSize: generateUtilities(0, 200),
      lineHeight: generateUtilities(-100, 100)
    }
  },
  plugins: []
}
