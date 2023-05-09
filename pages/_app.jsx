require('../styles/tailwindcss.css')
require('../styles/globals.scss')

function MyApp({ Component, pageProps }) {
  return (
    <main id='hello-world'>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
