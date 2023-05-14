import LocaleContextProvider from "contexts/LocaleContext"
import ModalContextProvider from "contexts/ModalContext"
import SnackbarContextProvider from "contexts/SnackbarContext"
import ThemeContextProvider from "contexts/ThemeContext"

function GlobalContextManager({ children, }) {
    return (
        <LocaleContextProvider>
            <ThemeContextProvider>
                <SnackbarContextProvider>
                    <ModalContextProvider>
                        {children}
                    </ModalContextProvider>
                </SnackbarContextProvider>
            </ThemeContextProvider>
        </LocaleContextProvider>
    )
}

export default GlobalContextManager