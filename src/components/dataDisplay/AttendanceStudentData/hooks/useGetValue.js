import { Check, Close } from "@mui/icons-material"
import INPUT_TYPES from "constants/INPUT_TYPES"
import _ from "lodash"
import { useCallback } from "react"

function useGetValue(studentAttendanceFormData) {
    const renderValue = useCallback((value, key) => {
        const input = studentAttendanceFormData.find((inputData) => inputData.name === key)
        if (input?.type === INPUT_TYPES.CHECKBOX) {
            if (value === true) {
                return <Check color="success"></Check>
            } else if (!value) {
                return <Close color="error"></Close>
            }
        }
        if (input?.type === INPUT_TYPES.NUMBER) {
            return isNaN(Number(value)) ? value : Number(value)
        }
        if (input?.type === INPUT_TYPES.TEXT) {
            return value
        }

    }, [studentAttendanceFormData])

    return renderValue
}

export default useGetValue