
import ProtectedPage from "components/managers/ProtectedPage";
import CourseGoLoginPage from "components/pageContents/CourseGoLoginPage"

function Course() {

    return (
        <ProtectedPage needCourseSession={false}>
            <CourseGoLoginPage></CourseGoLoginPage>
        </ProtectedPage>
    )
}

export default Course

