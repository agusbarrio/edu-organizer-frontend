import ControllerInput from "components/generic/ControllerInput"
import useGetControllerInputProps from "hooks/dynamicForms/useGetControllerInputProps"

function AdditionalInformationFields({ fields = [], prefix }) {
    const getControllerInputProps = useGetControllerInputProps()

    return (
        <>
            {fields.map((inputData) => {
                const controllerInputProps = getControllerInputProps(inputData)
                const resultName = prefix ? `${prefix}.${inputData.name}` : inputData.name
                return <ControllerInput
                    {...controllerInputProps}
                    key={resultName}
                    name={resultName}
                ></ControllerInput>
            })}
        </>)
}

export default AdditionalInformationFields;