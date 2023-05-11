import LocaleContextProvider from "contexts/LocaleContext"
import ModalContextProvider from "contexts/ModalContext"
import SnackbarContextProvider from "contexts/SnackbarContext"

function GlobalContextManager({ children, }) {
    return (
        <LocaleContextProvider>
            <SnackbarContextProvider>
                <ModalContextProvider>
                    {children}
                </ModalContextProvider>
            </SnackbarContextProvider>
        </LocaleContextProvider>
    )
}

export default GlobalContextManager