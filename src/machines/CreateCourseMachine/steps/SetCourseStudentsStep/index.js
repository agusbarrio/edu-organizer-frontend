import CourseStudentsSelection from "components/inputs/CourseStudentsSelection";
import StepTemplate from "components/templates/StepTemplate";
import { useCallback, useState } from "react";

function SetCourseStudentsStep({ state, send }) {

    const [students, setStudents] = useState(state.context.students)

    const handleChange = useCallback((students) => {
        setStudents(students)
    }, [])

    return <StepTemplate
        onClickBack={() => send('PREV', { students })}
        onClickCancel={() => send('CANCEL')}
        onClickNext={() => send('NEXT', { students })}
    >
        <CourseStudentsSelection onChange={handleChange} initialStudents={state.context.students}></CourseStudentsSelection>
    </StepTemplate>
}

export default SetCourseStudentsStep;