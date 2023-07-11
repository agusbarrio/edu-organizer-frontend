import ProtectedPage from "components/managers/ProtectedPage";
import CourseLoginPage from "components/pageContents/CourseLoginPage";


function CourseLogin() {

    return (
        <ProtectedPage needCourseSession={false}>
            <CourseLoginPage></CourseLoginPage>
        </ProtectedPage>
    )
}

export default CourseLogin
