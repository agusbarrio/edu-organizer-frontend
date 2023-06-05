import CoomingSoon from "components/dataDisplay/CoomingSoon"
import Form from "components/generic/Form"
import { forwardRef, useMemo } from "react"
import useSchema from "./hooks/useSchema"
import useGetInputComponent from "./hooks/useGetControllerInputProps"
import ControllerInput from "components/generic/ControllerInput"

const AttendanceCourseForm = forwardRef(function AttendanceCourseForm({ studentAttendanceFormData = [], onSubmit, template, templateProps, defaultValues }, ref) {
    const schema = useSchema({ studentAttendanceFormData })
    const getControllerInputProps = useGetInputComponent()

    return (
        <Form ref={ref} schema={schema} onSubmit={onSubmit} template={template} templateProps={templateProps} defaultValues={defaultValues}>
            {studentAttendanceFormData.map(inputData => {
                const controllerInputProps = getControllerInputProps(inputData)
                return <ControllerInput
                    key={inputData.name}
                    {...controllerInputProps}
                ></ControllerInput>
            })}
        </Form>
    )
})

export default AttendanceCourseForm