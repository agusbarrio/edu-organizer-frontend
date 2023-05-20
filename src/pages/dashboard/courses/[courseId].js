import ProtectedPage from "components/managers/ProtectedPage"
import CoursePage from "components/pageContents/CoursePage"
import USER_PERMISSIONS from "constants/USER_PERMISSIONS"

function Course() {
    return (
        <ProtectedPage needUserSession={true} userPermissionsAllowed={[USER_PERMISSIONS.ADMIN]}>
            <CoursePage></CoursePage>
        </ProtectedPage>

    )
}

export default Course
