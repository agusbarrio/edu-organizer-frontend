import CheckboxInput from "components/generic/CheckboxInput"
import NumberInput from "components/generic/NumberInput"
import TextInput from "components/generic/TextInput"
import INPUT_TYPES from "constants/INPUT_TYPES"
import { useCallback } from "react"

function useGetControllerInputProps() {
    const getControllerInputProps = useCallback((input) => {
        let result = {}
        result.name = input.name

        //checkbox
        if (input?.type === INPUT_TYPES.CHECKBOX) {
            result.render = CheckboxInput
            result.defaultValue = input?.inputConfig?.defaultValue || false
            result.label = input?.inputConfig?.label || input.name
        }

        //text
        if (input?.type === INPUT_TYPES.TEXT) {
            result.render = TextInput
            result.defaultValue = input?.inputConfig?.defaultValue || ''
            result.label = input?.inputConfig?.label || input.name
            result.placeholder = input?.inputConfig?.placeholder || ''
        }

        if (input?.type === INPUT_TYPES.NUMBER) {
            result.render = NumberInput
            result.defaultValue = input?.inputConfig?.defaultValue ?? 0
            result.label = input?.inputConfig?.label || input.name
            result.placeholder = input?.inputConfig?.placeholder || ''
        }

        return result
    }, [])

    return getControllerInputProps
}

export default useGetControllerInputProps