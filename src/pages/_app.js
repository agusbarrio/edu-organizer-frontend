

import LocaleContextProvider from 'contexts/LocaleContext'
import { SessionContextProvider } from 'contexts/SessionContext'
import SnackbarContextProvider from 'core/contexts/SnackbarContext'
import 'styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <SessionContextProvider>
      <LocaleContextProvider>
        <SnackbarContextProvider>
          <Component {...pageProps} />
        </SnackbarContextProvider>
      </LocaleContextProvider>
    </SessionContextProvider>
  )
}

