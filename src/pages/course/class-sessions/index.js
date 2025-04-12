
import ProtectedPage from "components/managers/ProtectedPage";
import CourseClassSessionsPage from "components/pageContents/CourseClassSessionsPage"

function CourseClassSessions() {

    return (
        <ProtectedPage needCourseSession={true}>
            <CourseClassSessionsPage></CourseClassSessionsPage>
        </ProtectedPage>
    )
}

export default CourseClassSessions

