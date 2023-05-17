import StepTemplate from "components/templates/StepTemplate";
import { useEffect } from "react";

function SetCourseConfigStep({ state, send }) {

    return <StepTemplate
        onClickBack={() => send('PREV')}
        onClickCancel={() => send('CANCEL')}
        onClickFinish={() => send('NEXT')}
    >
        SetCourseConfigStep
    </StepTemplate>
}

export default SetCourseConfigStep;