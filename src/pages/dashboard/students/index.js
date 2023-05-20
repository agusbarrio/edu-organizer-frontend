
import ProtectedPage from "components/managers/ProtectedPage"
import StudentsPage from "components/pageContents/StudentsPage"
import USER_PERMISSIONS from "constants/USER_PERMISSIONS"

function Students() {
    return (
        <ProtectedPage needUserSession={true} userPermissionsAllowed={[USER_PERMISSIONS.ADMIN]}>
            <StudentsPage></StudentsPage>
        </ProtectedPage>
    )
}

export default Students