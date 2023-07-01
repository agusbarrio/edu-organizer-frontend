import ProtectedPage from "components/managers/ProtectedPage"
import EditClassSessionPage from "components/pageContents/EditClassSessionPage"


import USER_PERMISSIONS from "constants/USER_PERMISSIONS"

function EditClassSession() {
    return (
        <ProtectedPage needUserSession={true} userPermissionsAllowed={[USER_PERMISSIONS.ADMIN]}>
            <EditClassSessionPage></EditClassSessionPage>
        </ProtectedPage>
    )
}

export default EditClassSession