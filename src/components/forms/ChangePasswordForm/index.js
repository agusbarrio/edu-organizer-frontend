import Form from "components/generic/Form"
import ControllerInput from "components/generic/ControllerInput"
import useValidator from "hooks/useValidator"
import useLocaleContext from "hooks/useLocaleContext"
import PasswordInput from "components/generic/PasswordInput"
import TEXTS from "constants/TEXTS"
import { forwardRef, useMemo } from "react"

const ChangePasswordForm = forwardRef(function ChangePasswordForm({ onSubmit, templateProps }, ref) {
    const { form, password, equalTo } = useValidator()
    const { translate } = useLocaleContext()
    const schema = useMemo(() => form({
        password: password(),
        repeatPassword: equalTo('password', { required: { value: true } }),
    }), [form, password, equalTo])

    return (
        <Form schema={schema} onSubmit={onSubmit} templateProps={templateProps} ref={ref}>
            <ControllerInput render={PasswordInput} name={"password"} label={translate(TEXTS.PASSWORD_LABEL)} placeholder={translate(TEXTS.PASSWORD_PLACEHOLDER)} />
            <ControllerInput render={PasswordInput} name={"repeatPassword"} label={translate(TEXTS.REPEAT_PASSWORD_LABEL)} placeholder={translate(TEXTS.REPEAT_PASSWORD_PLACEHOLDER)} />
        </Form>
    )
})

export default ChangePasswordForm