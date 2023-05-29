import ProtectedPage from "components/managers/ProtectedPage"
import EditCoursePage from "components/pageContents/EditCoursePage"

import USER_PERMISSIONS from "constants/USER_PERMISSIONS"

function EditCourse() {
    return (
        <ProtectedPage needUserSession={true} userPermissionsAllowed={[USER_PERMISSIONS.ADMIN]}>
            <EditCoursePage></EditCoursePage>
        </ProtectedPage>
    )
}

export default EditCourse