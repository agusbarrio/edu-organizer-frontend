import CourseStudentsSelection from "components/inputs/CourseStudentsSelection";
import StepTemplate from "components/templates/StepTemplate";
import TEXTS from "constants/TEXTS";
import useLocaleContext from "hooks/useLocaleContext";
import { useCallback, useState } from "react";

function SetCourseStudentsStep({ state, send }) {
    const { translate } = useLocaleContext()
    const [students, setStudents] = useState(state.context.students)

    const handleChange = useCallback((students) => {
        setStudents(students)
    }, [])

    return <StepTemplate
        title={translate(TEXTS.SET_COURSE_STUDENTS_TITLE)}
        onClickBack={() => send('PREV', { students })}
        onClickNext={() => send('NEXT', { students })}
    >
        <CourseStudentsSelection onChange={handleChange} initialStudents={state.context.students}></CourseStudentsSelection>
    </StepTemplate>
}

export default SetCourseStudentsStep;