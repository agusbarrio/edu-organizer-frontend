import useValidator from "hooks/useValidator"
import { useMemo } from "react"
import useGetInputValidator from "./useGetInputValidator"

function useSchema({ studentAttendanceFormData = [] }) {
    const { form } = useValidator()
    const getInputValidator = useGetInputValidator()

    const schema = useMemo(() => {
        const aux = {}
        studentAttendanceFormData.forEach((inputData) => {
            aux[inputData.name] = getInputValidator(inputData)
        })
        return form(aux)
    }, [studentAttendanceFormData, getInputValidator, form])

    return schema
}

export default useSchema