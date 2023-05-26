import CourseForm from "components/forms/CourseForm";
import InputsCreation from "components/inputs/InputsCreation";
import StepTemplate from "components/templates/StepTemplate";
import TEXTS from "constants/TEXTS";
import useLocaleContext from "hooks/useLocaleContext";
import { useCallback, useState } from "react";

function SetCourseClassSessionsConfigStep({ state, send }) {
    const [inputs, setInputs] = useState(state.context.inputs)
    const { translate } = useLocaleContext()

    const handleChange = useCallback((inputs) => {
        setInputs(inputs)
    }, [])

    return (
        <StepTemplate
            onClickBack={() => send('PREV', { inputs })}
            onClickFinish={() => send('NEXT', { inputs })}
            title={translate(TEXTS.SET_COURSE_CLASS_SESSIONS_CONFIG_TITLE)}
        >
            <InputsCreation onChange={handleChange} initialInputs={state.context.inputs}></InputsCreation>
        </StepTemplate>)
}

export default SetCourseClassSessionsConfigStep;