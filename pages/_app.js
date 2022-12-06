import GeneralLayout from '../components/GeneralLayout/GeneralLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <GeneralLayout>
      <Component {...pageProps} />
    </GeneralLayout>
  )
}

export default MyApp
