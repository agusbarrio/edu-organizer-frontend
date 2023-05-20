import ProtectedPage from "components/managers/ProtectedPage"
import CreateCoursePage from "components/pageContents/CreateCoursePage"
import USER_PERMISSIONS from "constants/USER_PERMISSIONS"

function CreateCourse() {
    return (
        <ProtectedPage needUserSession={true} userPermissionsAllowed={[USER_PERMISSIONS.ADMIN]}>
            <CreateCoursePage></CreateCoursePage>
        </ProtectedPage>
    )
}

export default CreateCourse