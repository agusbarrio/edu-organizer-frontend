import ProtectedPage from "components/managers/ProtectedPage"
import CourseDetailsPage from "components/pageContents/CourseDetailsPage"
import USER_PERMISSIONS from "constants/USER_PERMISSIONS"

function Course() {
    return (
        <ProtectedPage needUserSession={true} userPermissionsAllowed={[USER_PERMISSIONS.ADMIN]}>
            <CourseDetailsPage></CourseDetailsPage>
        </ProtectedPage>

    )
}

export default Course
