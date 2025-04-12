import ProtectedPage from "components/managers/ProtectedPage"
import CourseClassSessionPage from "components/pageContents/CourseClassSessionPage"

function CourseClassSession() {

    return (
        <ProtectedPage needCourseSession={true}>
            <CourseClassSessionPage></CourseClassSessionPage>
        </ProtectedPage>
    )
}


export default CourseClassSession