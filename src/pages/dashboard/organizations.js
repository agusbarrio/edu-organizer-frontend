import ProtectedPage from "components/managers/ProtectedPage"
import OrganizationsPage from "components/pageContents/OrganizationsPage"
import USER_PERMISSIONS from "constants/USER_PERMISSIONS"

function Organizations() {

    return (
        <ProtectedPage needUserSession={true} userPermissionsAllowed={[USER_PERMISSIONS.SUPERADMIN]}>
            <OrganizationsPage></OrganizationsPage>
        </ProtectedPage>
    )
}

export default Organizations