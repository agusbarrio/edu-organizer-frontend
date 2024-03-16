import useValidator from "hooks/useValidator"
import { useMemo } from "react"
import useGetInputValidator from "./useGetInputValidator"

function useSchema({ studentAttendanceFormData = [] }) {
    const { form } = useValidator()
    const getInputValidator = useGetInputValidator()

    const schemaObj = useMemo(() => {
        const aux = {}
        studentAttendanceFormData.forEach((inputData) => {
            aux[inputData.name] = getInputValidator(inputData)
        })
        return aux
    }, [studentAttendanceFormData, getInputValidator])


    const schema = useMemo(() => {
        return form(schemaObj)
    }, [schemaObj, form])

    return { schema, schemaObj }
}

export default useSchema