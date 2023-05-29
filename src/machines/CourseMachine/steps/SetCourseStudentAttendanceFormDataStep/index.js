import InputsCreation from "components/inputs/InputsCreation";
import StepTemplate from "components/templates/StepTemplate";
import TEXTS from "constants/TEXTS";
import useLocaleContext from "hooks/useLocaleContext";
import { useCallback, useRef } from "react";

function SetCourseStudentAttendanceFormDataStep({ state, send }) {
    const { translate } = useLocaleContext()

    const inputsRef = useRef(null)

    const handleBack = useCallback(() => {
        if (inputsRef?.current) {
            const studentAttendanceFormData = inputsRef.current.getValue()
            send('PREV', { studentAttendanceFormData })
        }
    }, [inputsRef, send])

    const handleFinish = useCallback(() => {
        if (inputsRef?.current) {
            const studentAttendanceFormData = inputsRef.current.getValue()
            send('NEXT', { studentAttendanceFormData })
        }
    }, [inputsRef, send])

    return (
        <StepTemplate
            onClickBack={handleBack}
            onClickFinish={handleFinish}
            title={translate(TEXTS.SET_COURSE_CLASS_SESSIONS_CONFIG_TITLE)}
        >
            <InputsCreation initialInputs={state.context.studentAttendanceFormData} ref={inputsRef}></InputsCreation>
        </StepTemplate>)
}

export default SetCourseStudentAttendanceFormDataStep;