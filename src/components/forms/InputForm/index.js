import ControllerInput from "components/generic/ControllerInput"
import Form from "components/generic/Form"
import SelectInput from "components/generic/SelectInput"
import TextInput from "components/generic/TextInput"
import InputTypeSelect from "components/inputs/InputTypeSelect"
import INPUT_TYPES from "constants/INPUT_TYPES"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useValidator from "hooks/useValidator"
import { forwardRef, useMemo } from "react"
import _ from "lodash"

const InputForm = forwardRef(function InputForm({ onSubmit, size, templateProps }, ref) {
    const { form, text, oneOf } = useValidator()
    const { translate } = useLocaleContext()
    const schema = useMemo(() => form({
        name: text({ required: { value: true } }),
        type: oneOf(_.values(INPUT_TYPES), { required: { value: true }, }),
        label: text({ required: { value: false } }),
        placeholder: text({ required: { value: false } }),
    }), [text, form, oneOf])

    return (
        <Form schema={schema} onSubmit={onSubmit} ref={ref} templateProps={templateProps}>
            <ControllerInput render={TextInput} size={size} name={"name"} label={translate(TEXTS.NAME_FIELD_LABEL)} placeholder={translate(TEXTS.NAME_FIELD_PLACEHOLDER)} />
            <ControllerInput render={InputTypeSelect} size={size} name={"type"} label={translate(TEXTS.TYPE_FIELD_LABEL)} placeholder={translate(TEXTS.TYPE_FIELD_PLACEHOLDER)} />
            <ControllerInput render={TextInput} size={size} name={"label"} label={translate(TEXTS.LABEL_FIELD_LABEL)} placeholder={translate(TEXTS.LABEL_FIELD_PLACEHOLDER)} />
            <ControllerInput render={TextInput} size={size} name={"placeholder"} label={translate(TEXTS.PLACEHOLDER_FIELD_LABEL)} placeholder={translate(TEXTS.PLACEHOLDER_FIELD_PLACEHOLDER)} />
        </Form >
    )
})

export default InputForm