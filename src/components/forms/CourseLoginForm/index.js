import Form from "components/generic/Form"
import ControllerInput from "components/generic/ControllerInput"
import useValidator from "hooks/useValidator"
import useLocaleContext from "hooks/useLocaleContext"
import PasswordInput from "components/generic/PasswordInput"
import TEXTS from "constants/TEXTS"
import { useMemo } from "react"

function CourseLoginForm({ onSubmit }) {
    const { form, text } = useValidator()
    const { translate } = useLocaleContext()
    const schema = useMemo(() => form({
        accessPin: text(),
    }), [form, text])

    return (
        <Form schema={schema} onSubmit={onSubmit} templateProps={{ submitButtonProps: { children: translate(TEXTS.COURSE_LOGIN_BUTTON) } }}>
            <ControllerInput render={PasswordInput} name={"accessPin"} label={translate(TEXTS.ACCESS_PIN_LABEL)} placeholder={translate(TEXTS.ACCESS_PIN_PLACEHOLDER)} />
        </Form>
    )
}

export default CourseLoginForm