import Form from "core/components/Form"
import ControllerInput from "core/components/ControllerInput"
import useValidator from "hooks/useValidator"
import useLocaleContext from "hooks/useLocaleContext"
import PasswordInput from "core/components/PasswordInput"
import TEXTS from "constants/TEXTS"
import { useMemo } from "react"
import TextInput from "core/components/TextInput"
import { Stack } from "@mui/material"

function LoginForm({ onSubmit }) {
    const { form, email, password } = useValidator()
    const { translate } = useLocaleContext()
    const schema = useMemo(() => form({
        email: email(),
        password: password()
    }), [email, form, password])

    return (
        <Form schema={schema} onSubmit={onSubmit} templateProps={{ submitButtonProps: { children: translate(TEXTS.LOGIN_BUTTON) } }}>
            <Stack spacing={2}>
                <ControllerInput render={TextInput} name={"email"} label={translate(TEXTS.EMAIL_LABEL)} placeholder={translate(TEXTS.EMAIL_PLACEHOLDER)} />
                <ControllerInput render={PasswordInput} name={"password"} label={translate(TEXTS.PASSWORD_LABEL)} placeholder={translate(TEXTS.PASSWORD_PLACEHOLDER)} />
            </Stack>
        </Form>
    )
}

export default LoginForm