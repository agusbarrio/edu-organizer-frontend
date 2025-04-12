import ProtectedPage from "components/managers/ProtectedPage"
import CourseEditClassSessionPage from "components/pageContents/CourseEditClassSessionPage"



function CourseEditClassSession() {
    return (
        <ProtectedPage needCourseSession={true}>
            <CourseEditClassSessionPage></CourseEditClassSessionPage>
        </ProtectedPage>
    )
}

export default CourseEditClassSession
