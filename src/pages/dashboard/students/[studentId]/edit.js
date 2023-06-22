import ProtectedPage from "components/managers/ProtectedPage"
import EditStudentPage from "components/pageContents/EditStudentPage"

import USER_PERMISSIONS from "constants/USER_PERMISSIONS"

function EditStudent() {

    return (
        <ProtectedPage needUserSession={true} userPermissionsAllowed={[USER_PERMISSIONS.ADMIN]}>
            <EditStudentPage></EditStudentPage>
        </ProtectedPage>
    )
}

export default EditStudent