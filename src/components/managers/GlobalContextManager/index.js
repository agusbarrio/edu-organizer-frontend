import LocaleContextProvider from "contexts/LocaleContext"
import ModalContextProvider from "contexts/ModalContext"
import { SessionContextProvider } from "contexts/SessionContext"
import SnackbarContextProvider from "contexts/SnackbarContext"
import ThemeContextProvider from "contexts/ThemeContext"

function GlobalContextManager({ children }) {
    return (
        <SessionContextProvider>
            <LocaleContextProvider>
                <ThemeContextProvider>
                    <SnackbarContextProvider>
                        <ModalContextProvider>
                            {children}
                        </ModalContextProvider>
                    </SnackbarContextProvider>
                </ThemeContextProvider>
            </LocaleContextProvider>
        </SessionContextProvider>

    )
}

export default GlobalContextManager