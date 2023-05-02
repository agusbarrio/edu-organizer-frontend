import Form from "core/components/Form"
import ControllerInput from "core/components/ControllerInput"
import useValidator from "hooks/useValidator"
import useLocaleContext from "hooks/useLocaleContext"
import PasswordInput from "core/components/PasswordInput"
import SubmitButton from "core/components/SubmitButton"
import TEXTS from "constants/TEXTS"
import { useMemo } from "react"
import TextInput from "core/components/TextInput"
import { Stack } from "@mui/material"

function LoginForm({ onSubmit }) {
    const { form, email, password, equalTo, text } = useValidator()
    const { translate } = useLocaleContext()
    const schema = useMemo(() => form({
        organizationName: text({ required: { value: true } }),
        firstName: text({ required: { value: true } }),
        lastName: text({ required: { value: true } }),
        email: email(),
        password: password(),
        repeatPassword: equalTo('password', { required: { value: true } }),
    }), [email, form, password, equalTo, text])

    return (
        <Form schema={schema} onSubmit={onSubmit} templateProps={{ submitButtonProps: { children: translate(TEXTS.LOGIN_BUTTON) } }}>
            <Stack spacing={2}>
                <ControllerInput render={TextInput} name={"organizationName"} label={translate(TEXTS.ORGANIZATION_NAME_LABEL)} placeholder={translate(TEXTS.ORGANIZATION_NAME_PLACEHOLDER)} />
                <ControllerInput render={TextInput} name={"firstName"} label={translate(TEXTS.FIRST_NAME_LABEL)} placeholder={translate(TEXTS.FIRST_NAME_PLACEHOLDER)} />
                <ControllerInput render={TextInput} name={"lastName"} label={translate(TEXTS.LAST_NAME_LABEL)} placeholder={translate(TEXTS.LAST_NAME_PLACEHOLDER)} />
                <ControllerInput render={TextInput} name={"email"} label={translate(TEXTS.EMAIL_LABEL)} placeholder={translate(TEXTS.EMAIL_PLACEHOLDER)} />
                <ControllerInput render={PasswordInput} name={"password"} label={translate(TEXTS.PASSWORD_LABEL)} placeholder={translate(TEXTS.PASSWORD_PLACEHOLDER)} />
                <ControllerInput render={PasswordInput} name={"repeatPassword"} label={translate(TEXTS.REPEAT_PASSWORD_LABEL)} placeholder={translate(TEXTS.REPEAT_PASSWORD_PLACEHOLDER)} />
            </Stack>

        </Form>
    )
}

export default LoginForm