import Form from "components/generic/Form"
import ControllerInput from "components/generic/ControllerInput"
import useValidator from "hooks/useValidator"
import useLocaleContext from "hooks/useLocaleContext"
import TEXTS from "constants/TEXTS"
import { forwardRef, useMemo } from "react"
import TextInput from "components/generic/TextInput"
import CoursesSelect from "components/inputs/CourseSelect"

const StudentForm = forwardRef(function StudentForm({ onSubmit, defaultValues, withCourse = true, templateProps, size }, ref) {
    const { form, text, id } = useValidator()
    const { translate } = useLocaleContext()
    const schema = useMemo(() => {
        const baseSchema = {
            firstName: text({ required: { value: true } }),
            lastName: text({ required: { value: true } }),
        }
        if (withCourse) {
            baseSchema.courseId = id()
        }

        return form(baseSchema)
    }, [form, text, id, withCourse])

    return (
        <Form schema={schema} defaultValues={defaultValues} onSubmit={onSubmit} ref={ref} templateProps={templateProps}>
            <ControllerInput render={TextInput} size={size} name={"firstName"} label={translate(TEXTS.STUDENT_FIRST_NAME_LABEL)} placeholder={translate(TEXTS.STUDENT_FIRST_NAME_PLACEHOLDER)} />
            <ControllerInput render={TextInput} size={size} name={"lastName"} label={translate(TEXTS.STUDENT_LAST_NAME_LABEL)} placeholder={translate(TEXTS.STUDENT_LAST_NAME_PLACEHOLDER)} />
            {withCourse && <ControllerInput
                render={CoursesSelect}
                size={size}
                name="courseId"
                label={translate(TEXTS.STUDENT_COURSE_LABEL)}
            ></ControllerInput>}
        </Form>
    )
})

export default StudentForm