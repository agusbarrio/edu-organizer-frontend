import LoadingPage from "components/pages/LoadingPage"
import LocaleContextProvider from "contexts/LocaleContext"
import SnackbarContextProvider from "core/contexts/SnackbarContext"
import dynamic from "next/dynamic"
const SessionContextProvider = dynamic(() => import('contexts/SessionContext').then(mod => mod.SessionContextProvider), { ssr: false, loading: LoadingPage })

function GlobalContextManager({ children, }) {
    return (
        <SessionContextProvider>
            <LocaleContextProvider>
                <SnackbarContextProvider>
                    {children}
                </SnackbarContextProvider>
            </LocaleContextProvider>
        </SessionContextProvider>
    )
}

export default GlobalContextManager