import ProtectedPage from "components/managers/ProtectedPage"
import UsersPage from "components/pageContents/UsersPage"
import USER_PERMISSIONS from "constants/USER_PERMISSIONS"

function Users() {

    return (
        <ProtectedPage needUserSession={true} userPermissionsAllowed={[USER_PERMISSIONS.SUPERADMIN]}>
            <UsersPage></UsersPage>
        </ProtectedPage>
    )
}

export default Users