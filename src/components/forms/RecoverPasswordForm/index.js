import Form from "components/generic/Form"
import ControllerInput from "components/generic/ControllerInput"
import useValidator from "hooks/useValidator"
import useLocaleContext from "hooks/useLocaleContext"
import TEXTS from "constants/TEXTS"
import { useMemo } from "react"
import TextInput from "components/generic/TextInput"

function RecoverPasswordForm({ onSubmit, templateProps }) {
    const { form, email, } = useValidator()
    const { translate } = useLocaleContext()
    const schema = useMemo(() => form({
        email: email(),
    }), [email, form,])

    return (
        <Form schema={schema} onSubmit={onSubmit} templateProps={templateProps}>
            <ControllerInput render={TextInput} name={"email"} label={translate(TEXTS.EMAIL_LABEL)} placeholder={translate(TEXTS.EMAIL_PLACEHOLDER)} />
        </Form>
    )
}

export default RecoverPasswordForm