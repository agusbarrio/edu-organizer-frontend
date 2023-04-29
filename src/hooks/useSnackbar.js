import { SnackbarContext } from "contexts/SnackbarContext"
import { useContext } from "react"

function useSnackbar() {
    const { open, close, success, error, info, warning } = useContext(SnackbarContext)
    return { open, close, success, error, info, warning }
}

export default useSnackbar