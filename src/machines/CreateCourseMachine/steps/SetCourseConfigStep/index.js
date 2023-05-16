import StepTemplate from "components/templates/StepTemplate";

function SetCourseConfigStep({ state, send }) {
    console.log(state.context)
    return <StepTemplate
        onClickBack={() => send('PREV')}
        onClickCancel={() => send('CANCEL')}
        onClickFinish={() => send('NEXT')}
    >
        SetCourseConfigStep
    </StepTemplate>
}

export default SetCourseConfigStep;