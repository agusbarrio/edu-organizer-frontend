import Form from "components/generic/Form"
import ControllerInput from "components/generic/ControllerInput"
import useValidator from "hooks/useValidator"
import useLocaleContext from "hooks/useLocaleContext"
import TEXTS from "constants/TEXTS"
import { useMemo } from "react"
import TextInput from "components/generic/TextInput"

function CourseShortIdForm({ onSubmit }) {
    const { form, text } = useValidator()
    const { translate } = useLocaleContext()
    const schema = useMemo(() => form({
        shortId: text(),
    }), [form, text])

    return (
        <Form schema={schema} onSubmit={onSubmit} templateProps={{ submitButtonProps: { children: translate(TEXTS.COURSE_LOGIN_BUTTON) } }}>
            <ControllerInput render={TextInput} name={"shortId"} label={translate(TEXTS.COURSE_SHORT_ID_LABEL)} placeholder={translate(TEXTS.COURSE_SHORT_ID_PLACEHOLDER)} />
        </Form>
    )
}

export default CourseShortIdForm