
import ProtectedPage from "components/managers/ProtectedPage";
import CourseNewStudentPage from "components/pageContents/CourseNewStudentPage"

function NewStudent() {

    return (
        <ProtectedPage needCourseSession={true}>
            <CourseNewStudentPage></CourseNewStudentPage>
        </ProtectedPage>
    )
}

export default NewStudent

