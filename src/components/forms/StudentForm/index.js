import Form from "components/generic/Form"
import ControllerInput from "components/generic/ControllerInput"
import useValidator from "hooks/useValidator"
import useLocaleContext from "hooks/useLocaleContext"
import TEXTS from "constants/TEXTS"
import { forwardRef, useMemo } from "react"
import TextInput from "components/generic/TextInput"
import CoursesSelect from "components/inputs/CourseSelect"
import AvatarInput from "components/generic/AvatarInput"

const StudentForm = forwardRef(function StudentForm({ onSubmit, defaultValues, withCourse = true, templateProps, size }, ref) {
    const { form, name, id } = useValidator()
    const { translate } = useLocaleContext()
    const schema = useMemo(() => {
        const baseSchema = {
            firstName: name({ required: { value: true } }),
            lastName: name({ required: { value: true } }),
            //TODO add avatar validation
        }
        if (withCourse) {
            baseSchema.courseId = id({ required: { value: false } })
        }

        return form(baseSchema)
    }, [form, id, withCourse, name])

    return (
        <Form schema={schema} defaultValues={defaultValues} onSubmit={onSubmit} ref={ref} templateProps={templateProps}>
            <ControllerInput render={AvatarInput} name={"avatar"} size={size} />
            <ControllerInput render={TextInput} size={size} name={"firstName"} label={translate(TEXTS.STUDENT_FIRST_NAME_LABEL)} placeholder={translate(TEXTS.STUDENT_FIRST_NAME_PLACEHOLDER)} />
            <ControllerInput render={TextInput} size={size} name={"lastName"} label={translate(TEXTS.STUDENT_LAST_NAME_LABEL)} placeholder={translate(TEXTS.STUDENT_LAST_NAME_PLACEHOLDER)} />
            {withCourse && <ControllerInput
                render={CoursesSelect}
                size={size}
                name="courseId"
                label={translate(TEXTS.COURSE_LABEL)}
            ></ControllerInput>}
        </Form>
    )
})

export default StudentForm