import Form from "components/generic/Form"
import ControllerInput from "components/generic/ControllerInput"
import useValidator from "hooks/useValidator"
import useLocaleContext from "hooks/useLocaleContext"
import TEXTS from "constants/TEXTS"
import { useMemo } from "react"
import TextInput from "components/generic/TextInput"

function MyAccountForm({ onSubmit, defaultValues, templateProps, }) {
    const { form, text } = useValidator()
    const { translate } = useLocaleContext()
    const schema = useMemo(() => form({
        firstName: text({ required: { value: true } }),
        lastName: text({ required: { value: true } }),
    }), [form, text,])

    return (
        <Form schema={schema} defaultValues={defaultValues} onSubmit={onSubmit} templateProps={templateProps}>
            <ControllerInput render={TextInput} name={"firstName"} label={translate(TEXTS.USER_FIRST_NAME_LABEL)} placeholder={translate(TEXTS.FIRST_NAME_PLACEHOLDER)} />
            <ControllerInput render={TextInput} name={"lastName"} label={translate(TEXTS.USER_LAST_NAME_LABEL)} placeholder={translate(TEXTS.LAST_NAME_PLACEHOLDER)} />
        </Form>
    )
}

export default MyAccountForm