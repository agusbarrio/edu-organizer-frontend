import ControllerInput from "components/generic/ControllerInput"
import Form from "components/generic/Form"
import TextInput from "components/generic/TextInput"
import InputTypeSelect from "components/inputs/InputTypeSelect"
import INPUT_TYPES from "constants/INPUT_TYPES"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useValidator from "hooks/useValidator"
import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef, useState } from "react"
import _ from "lodash"
import useSchemaByInputType from "./hooks/useSchemaByInputType"
import FieldsByInputType from "./components/FieldsByInputType"
import useGetDefaultValuesByInputType from "./hooks/useGetDefaultValuesByType"

const InputForm = forwardRef(function InputForm({ onSubmit, size, templateProps, allowPoints }, refProp) {
    const { form, text, oneOf } = useValidator()
    const { translate } = useLocaleContext()
    const [currentType, setCurrentType] = useState(null)

    const ref = useRef(null)

    const getDefaultValuesByType = useGetDefaultValuesByInputType(allowPoints)

    const handleChangeType = useCallback((e) => {
        const newType = e ? e.target.value : null
        if (ref.current) {
            const defaultValues = getDefaultValuesByType(newType)
            ref.current.setValue('inputConfig', defaultValues?.inputConfig)
            ref.current.setValue('metadata', defaultValues?.metadata)
        }
        setCurrentType(newType)
    }, [getDefaultValuesByType])

    useImperativeHandle(refProp, () => ({ ...ref.current, handleChangeType }), [ref, handleChangeType])



    const inputSchemaObj = useSchemaByInputType(currentType)
    const schema = useMemo(() => form({
        name: text({ required: { value: true } }),
        type: oneOf(_.values(INPUT_TYPES), { required: { value: true }, }),
        inputConfig: inputSchemaObj,
    }), [text, form, oneOf, inputSchemaObj])

    return (
        <Form schema={schema} onSubmit={onSubmit} ref={ref} templateProps={templateProps}>
            <ControllerInput render={TextInput} size={size} name={"name"} label={translate(TEXTS.NAME_FIELD_LABEL)} placeholder={translate(TEXTS.NAME_FIELD_PLACEHOLDER)} />
            <ControllerInput render={InputTypeSelect} size={size} name={"type"} label={translate(TEXTS.TYPE_FIELD_LABEL)} placeholder={translate(TEXTS.TYPE_FIELD_PLACEHOLDER)} onChange={handleChangeType} />
            <FieldsByInputType type={currentType} size={size} allowPoints={allowPoints} />
        </Form >
    )
})

export default InputForm