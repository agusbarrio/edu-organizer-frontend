import InputsCreation from "components/inputs/InputsCreation";
import StepTemplate from "components/templates/StepTemplate";
import TEXTS from "constants/TEXTS";
import useLocaleContext from "hooks/useLocaleContext";
import { useCallback, useRef } from "react";

function SetCourseStudentAdditionalInfoFormData({ state, send }) {
    const { translate } = useLocaleContext()

    const inputsRef = useRef(null)

    const handleBack = useCallback(() => {
        if (inputsRef?.current) {
            const studentAdditionalInfoFormData = inputsRef.current.getValue()
            send('PREV', { studentAdditionalInfoFormData })
        }
    }, [inputsRef, send])

    const handleFinish = useCallback(() => {
        if (inputsRef?.current) {
            const studentAdditionalInfoFormData = inputsRef.current.getValue()
            send('NEXT', { studentAdditionalInfoFormData })
        }
    }, [inputsRef, send])

    return (
        <StepTemplate
            onClickBack={handleBack}
            onClickFinish={handleFinish}
            title={translate(TEXTS.SET_STUDENT_ADDITIONAL_INFORMATION_TITLE)}
        >
            <InputsCreation initialInputs={state.context.studentAdditionalInfoFormData} ref={inputsRef} field={'studentAdditionalInfoFormData'} inputsListHelp={translate(TEXTS.STUDENT_ADDITIONAL_INFORMATION_INPUTS_LIST_CARD_HELP)} allowPoints={false}></InputsCreation>
        </StepTemplate>)
}

export default SetCourseStudentAdditionalInfoFormData;