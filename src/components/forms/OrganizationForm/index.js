import Form from "components/generic/Form"
import ControllerInput from "components/generic/ControllerInput"
import useValidator from "hooks/useValidator"
import useLocaleContext from "hooks/useLocaleContext"
import TEXTS from "constants/TEXTS"
import { useMemo } from "react"
import TextInput from "components/generic/TextInput"

function OrganizationForm({ onSubmit, defaultValues, templateProps, }) {
    const { form, text, } = useValidator()
    const { translate } = useLocaleContext()
    const schema = useMemo(() => form({
        name: text({ required: { value: true } }),
    }), [form, text])

    return (
        <Form schema={schema} defaultValues={defaultValues} onSubmit={onSubmit} templateProps={templateProps}>
            <ControllerInput render={TextInput} name={"name"} label={translate(TEXTS.ORGANIZATION_NAME_LABEL)} placeholder={translate(TEXTS.ORGANIZATION_NAME_PLACEHOLDER)} />
        </Form>
    )
}

export default OrganizationForm