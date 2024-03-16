import CheckboxInput from "components/generic/CheckboxInput"
import ControllerInput from "components/generic/ControllerInput"
import NumberInput from "components/generic/NumberInput"
import TextInput from "components/generic/TextInput"
import CORE_TEXTS from "constants/CORE_TEXTS"
import INPUT_TYPES from "constants/INPUT_TYPES"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"

function FieldsByInputType({ type, size, allowPoints }) {
    const { translate } = useLocaleContext()
    return (
        <>
            {type === INPUT_TYPES.CHECKBOX && (
                <>
                    {allowPoints && <ControllerInput render={NumberInput} size={size} name={"metadata.pointsToAdd"} label={translate(CORE_TEXTS.GENERIC_POINTS_TO_ADD_LABEL)} placeholder={translate(CORE_TEXTS.GENERIC_POINTS_TO_ADD_PLACEHOLDER)} decimalScale={0} />}
                    <ControllerInput render={CheckboxInput} size={size} name={"inputConfig.defaultValue"} label={translate(CORE_TEXTS.GENERIC_DEFAULT_VALUE)} />
                    <ControllerInput render={TextInput} size={size} name={"inputConfig.label"} label={translate(CORE_TEXTS.GENERIC_LABEL_LABEL)} placeholder={translate(CORE_TEXTS.GENERIC_LABEL_PLACEHOLDER)} />
                </>
            )}
            {type === INPUT_TYPES.TEXT && (
                <>
                    <ControllerInput render={TextInput} size={size} name={"inputConfig.label"} label={translate(CORE_TEXTS.GENERIC_LABEL_LABEL)} placeholder={translate(CORE_TEXTS.GENERIC_LABEL_PLACEHOLDER)} />
                    <ControllerInput render={TextInput} size={size} name={"inputConfig.placeholder"} label={translate(TEXTS.PLACEHOLDER_FIELD_LABEL)} placeholder={translate(TEXTS.PLACEHOLDER_FIELD_PLACEHOLDER)} />
                    <ControllerInput render={TextInput} size={size} name={"inputConfig.defaultValue"} label={translate(CORE_TEXTS.GENERIC_DEFAULT_VALUE)} />
                </>
            )}
            {type === INPUT_TYPES.NUMBER && (
                <>
                    <ControllerInput render={TextInput} size={size} name={"inputConfig.label"} label={translate(CORE_TEXTS.GENERIC_LABEL_LABEL)} placeholder={translate(CORE_TEXTS.GENERIC_LABEL_PLACEHOLDER)} />
                    <ControllerInput render={TextInput} size={size} name={"inputConfig.placeholder"} label={translate(TEXTS.PLACEHOLDER_FIELD_LABEL)} placeholder={translate(TEXTS.PLACEHOLDER_FIELD_PLACEHOLDER)} />
                    <ControllerInput render={NumberInput} size={size} name={"inputConfig.min"} label={translate(CORE_TEXTS.GENERIC_MIN_LABEL)} />
                    <ControllerInput render={NumberInput} size={size} name={"inputConfig.max"} label={translate(CORE_TEXTS.GENERIC_MAX_LABEL)} />
                    <ControllerInput render={NumberInput} size={size} name={"inputConfig.defaultValue"} label={translate(CORE_TEXTS.GENERIC_DEFAULT_VALUE)} />
                    <ControllerInput render={NumberInput} size={size} name={"inputConfig.decimalScale"} label={translate(TEXTS.DECIMAL_SCALE_FIELD_LABEL)} />
                    <ControllerInput render={CheckboxInput} size={size} name={"inputConfig.allowNegative"} label={translate(TEXTS.ALLOW_NEGATIVE_FIELD_LABEL)} />
                    {allowPoints && <ControllerInput render={CheckboxInput} size={size} name={"metadata.shouldAffectPoints"} label={translate(TEXTS.SHOULD_AFFECT_POINTS_FIELD_LABEL)} />}
                </>
            )}
        </>
    )
}

export default FieldsByInputType