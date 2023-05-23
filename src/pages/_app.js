import GlobalContextManager from 'components/managers/GlobalContextManager'
import 'styles/globals.css'

export default function App({ Component, pageProps }) {
  return (<GlobalContextManager><Component {...pageProps} /></GlobalContextManager>)
}

