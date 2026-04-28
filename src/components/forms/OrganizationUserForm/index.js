import ControllerInput from "components/generic/ControllerInput"
import Form from "components/generic/Form"
import SelectInput from "components/generic/SelectInput"
import TextInput from "components/generic/TextInput"
import USER_PERMISSIONS from "constants/USER_PERMISSIONS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useValidator from "hooks/useValidator"
import { useMemo } from "react"

function OrganizationUserForm({ onSubmit, defaultValues, templateProps }) {
    const { form, email, name, array, oneOf } = useValidator()
    const { translate } = useLocaleContext()

    const schema = useMemo(() => form({
        email: email({ required: { value: true } }),
        firstName: name({ required: { value: true } }),
        lastName: name({ required: { value: true } }),
        permissions: array().of(oneOf([USER_PERMISSIONS.ADMIN, USER_PERMISSIONS.TEACHER], { required: { value: true } })).min(1)
    }), [array, email, form, name, oneOf])

    const permissionsList = useMemo(() => ([
        { value: USER_PERMISSIONS.ADMIN, children: translate(TEXTS.USER_PERMISSION_ADMIN) },
        { value: USER_PERMISSIONS.TEACHER, children: translate(TEXTS.USER_PERMISSION_TEACHER) }
    ]), [translate])

    return (
        <Form schema={schema} defaultValues={defaultValues} onSubmit={onSubmit} templateProps={templateProps}>
            <ControllerInput render={TextInput} name={"email"} label={translate(TEXTS.USER_EMAIL_LABEL)} placeholder={translate(TEXTS.EMAIL_PLACEHOLDER)} />
            <ControllerInput render={TextInput} name={"firstName"} label={translate(TEXTS.USER_FIRST_NAME_LABEL)} placeholder={translate(TEXTS.FIRST_NAME_PLACEHOLDER)} />
            <ControllerInput render={TextInput} name={"lastName"} label={translate(TEXTS.USER_LAST_NAME_LABEL)} placeholder={translate(TEXTS.LAST_NAME_PLACEHOLDER)} />
            <ControllerInput render={SelectInput} name={"permissions"} label={translate(TEXTS.USER_PERMISSIONS_LABEL)} list={permissionsList} multiple />
        </Form>
    )
}

export default OrganizationUserForm
