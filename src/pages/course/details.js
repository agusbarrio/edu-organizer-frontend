import ProtectedPage from "components/managers/ProtectedPage";
import CourseDetailsForTeacherPage from "components/pageContents/CourseDetailsForTeacherPage";


function NewClass() {

    return (
        <ProtectedPage needCourseSession={true}>
            <CourseDetailsForTeacherPage></CourseDetailsForTeacherPage>
        </ProtectedPage>
    )
}

export default NewClass

