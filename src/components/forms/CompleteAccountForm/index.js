import ControllerInput from "components/generic/ControllerInput"
import Form from "components/generic/Form"
import PasswordInput from "components/generic/PasswordInput"
import TextInput from "components/generic/TextInput"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useValidator from "hooks/useValidator"
import { useMemo } from "react"

function CompleteAccountForm({ onSubmit, templateProps }) {
    const { form, name, password, equalTo } = useValidator()
    const { translate } = useLocaleContext()

    const schema = useMemo(() => form({
        firstName: name({ required: { value: true } }),
        lastName: name({ required: { value: true } }),
        password: password(),
        repeatPassword: equalTo('password', { required: { value: true } }),
    }), [equalTo, form, name, password])

    return (
        <Form schema={schema} onSubmit={onSubmit} templateProps={templateProps}>
            <ControllerInput render={TextInput} name={"firstName"} label={translate(TEXTS.USER_FIRST_NAME_LABEL)} placeholder={translate(TEXTS.FIRST_NAME_PLACEHOLDER)} />
            <ControllerInput render={TextInput} name={"lastName"} label={translate(TEXTS.USER_LAST_NAME_LABEL)} placeholder={translate(TEXTS.LAST_NAME_PLACEHOLDER)} />
            <ControllerInput render={PasswordInput} name={"password"} label={translate(TEXTS.PASSWORD_LABEL)} placeholder={translate(TEXTS.PASSWORD_PLACEHOLDER)} />
            <ControllerInput render={PasswordInput} name={"repeatPassword"} label={translate(TEXTS.REPEAT_PASSWORD_LABEL)} placeholder={translate(TEXTS.REPEAT_PASSWORD_PLACEHOLDER)} />
        </Form>
    )
}

export default CompleteAccountForm
