import CheckboxInput from "components/generic/CheckboxInput"
import INPUT_TYPES from "constants/INPUT_TYPES"
import { useCallback } from "react"

function useGetControllerInputProps() {
    const getControllerInputProps = useCallback((input) => {
        let result = {}
        result.name = input.name
        result.placeholder = input.placeholder
        result.label = input.label ?? input.name

        //checkbox
        if (input?.type === INPUT_TYPES.CHECKBOX) {
            result.render = CheckboxInput
            result.defaultValue = input.defaultValue ?? false
        }

        return result
    }, [])

    return getControllerInputProps
}

export default useGetControllerInputProps