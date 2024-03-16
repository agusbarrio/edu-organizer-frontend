import CheckboxInput from "components/generic/CheckboxInput"
import NumberInput from "components/generic/NumberInput"
import TextInput from "components/generic/TextInput"
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
            result.defaultValue = input?.inputConfig?.defaultValue || false
        }

        //text
        if (input?.type === INPUT_TYPES.TEXT) {
            result.render = TextInput
            result.defaultValue = input?.inputConfig?.defaultValue || ''
        }

        if (input?.type === INPUT_TYPES.NUMBER) {
            result.render = NumberInput
            result.defaultValue = input?.inputConfig?.defaultValue ?? 0
        }

        return result
    }, [])

    return getControllerInputProps
}

export default useGetControllerInputProps