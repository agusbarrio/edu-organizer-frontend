import INPUT_TYPES from "constants/INPUT_TYPES"
import useValidator from "hooks/useValidator"
import { useMemo } from "react"

function useSchemaByInputType(type) {
    const { object } = useValidator()
    const inputSchemaObj = useMemo(() => {
        switch (type) {
            case INPUT_TYPES.TEXT:
                return {}
            case INPUT_TYPES.CHECKBOX:
                return {}
            case INPUT_TYPES.NUMBER:
                return {}
            default:
                return {}
        }
    }, [type])

    const inputSchema = useMemo(() => {
        return object(inputSchemaObj)
    }, [inputSchemaObj, object])

    return inputSchema
}

export default useSchemaByInputType