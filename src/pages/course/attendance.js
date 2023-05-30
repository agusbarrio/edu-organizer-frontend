
import ProtectedPage from "components/managers/ProtectedPage";
import CourseAttendancePage from "components/pageContents/CourseAttendancePage"

function Course() {

    return (
        <ProtectedPage needCourseSession={true}>
            <CourseAttendancePage></CourseAttendancePage>
        </ProtectedPage>
    )
}

export default Course

