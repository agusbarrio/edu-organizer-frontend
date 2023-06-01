
import ProtectedPage from "components/managers/ProtectedPage";
import CoursePage from "components/pageContents/CoursePage"

function Course() {

    return (
        <ProtectedPage needCourseSession={true}>
            <CoursePage></CoursePage>
        </ProtectedPage>
    )
}

export default Course

