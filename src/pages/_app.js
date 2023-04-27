

import LocaleContextProvider from 'contexts/LocaleContext'
import { SessionContextProvider } from 'contexts/SessionContext'
import 'styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <SessionContextProvider>
      <LocaleContextProvider>
        <Component {...pageProps} />
      </LocaleContextProvider>
    </SessionContextProvider>
  )
}

