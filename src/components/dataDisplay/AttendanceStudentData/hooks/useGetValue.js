import { Check, Close } from "@mui/icons-material"
import { useCallback } from "react"

function useGetValue() {
    const renderValue = useCallback((value) => {
        if (value === true) {
            return <Check color="success"></Check>
        }
        else if (value === false) {
            return <Close color="error"></Close>
        }
    }, [])

    return renderValue
}

export default useGetValue