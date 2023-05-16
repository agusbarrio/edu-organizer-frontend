import StepTemplate from "components/templates/StepTemplate";

function SetCourseStudentsStep({ state, send }) {
    return <StepTemplate
        onClickBack={() => send('PREV')}
        onClickCancel={() => send('CANCEL')}
        onClickNext={() => send('NEXT', { studentsToCreate: [1, 2, 3], studentsToSet: [1, 2, 3] })}
    >
        SetCourseStudentsStep
    </StepTemplate>
}

export default SetCourseStudentsStep;