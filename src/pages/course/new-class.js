import ProtectedPage from "components/managers/ProtectedPage";
import CourseNewClassPage from "components/pageContents/CourseNewClassPage"

function NewClass() {

    return (
        <ProtectedPage needCourseSession={true}>
            <CourseNewClassPage></CourseNewClassPage>
        </ProtectedPage>
    )
}

export default NewClass

