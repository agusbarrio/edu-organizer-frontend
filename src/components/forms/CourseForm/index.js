import Form from "components/generic/Form"
import ControllerInput from "components/generic/ControllerInput"
import useValidator from "hooks/useValidator"
import useLocaleContext from "hooks/useLocaleContext"
import TEXTS from "constants/TEXTS"
import { forwardRef, useMemo } from "react"
import TextInput from "components/generic/TextInput"
import PasswordInput from "components/generic/PasswordInput"
import NumberInput from "components/generic/NumberInput"

const CourseForm = forwardRef(function CourseForm({ onSubmit, defaultValues, templateProps }, ref) {
    const { form, text } = useValidator()
    const { translate } = useLocaleContext()
    const schema = useMemo(() => form({
        name: text({ required: { value: true } }),
        accessPin: text({ required: { value: false } }),
        //TODO: add validation for pointsPerAttendance
    }), [form, text])

    return (
        <Form schema={schema} defaultValues={defaultValues} onSubmit={onSubmit} ref={ref} templateProps={templateProps}>
            <ControllerInput render={TextInput} name={"name"} label={translate(TEXTS.COURSE_NAME_LABEL)} placeholder={translate(TEXTS.COURSE_NAME_PLACEHOLDER)} />
            <ControllerInput render={NumberInput} name={"pointsPerAttendance"} label={translate(TEXTS.COURSE_POINTS_PER_ATTENDANCE_LABEL)} placeholder={translate(TEXTS.COURSE_POINTS_PER_ATTENDANCE_PLACEHOLDER)} decimalScale={0} />
            <ControllerInput render={PasswordInput} name={"accessPin"} label={translate(TEXTS.COURSE_ACCESS_PIN_LABEL)} placeholder={translate(TEXTS.COURSE_ACCESS_PIN_PLACEHOLDER)} />
        </Form>
    )
})

export default CourseForm