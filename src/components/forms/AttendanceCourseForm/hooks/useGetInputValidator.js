import INPUT_TYPES from "constants/INPUT_TYPES"
import useValidator from "hooks/useValidator"
import { useCallback } from "react"

function useGetInputValidator() {
    const { checkbox } = useValidator()
    const getInputValidator = useCallback((inputData) => {
        let result
        if (inputData?.type === INPUT_TYPES.CHECKBOX) {
            result = checkbox(inputData.config)
        }
        return result
    }, [checkbox])

    return getInputValidator
}

export default useGetInputValidator