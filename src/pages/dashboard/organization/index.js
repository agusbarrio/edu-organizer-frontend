import ProtectedPage from "components/managers/ProtectedPage"
import MyOrganizationPage from "components/pageContents/MyOrganizationPage"
import USER_PERMISSIONS from "constants/USER_PERMISSIONS"

function Organization() {

    return (
        <ProtectedPage needUserSession={true} userPermissionsAllowed={[USER_PERMISSIONS.ADMIN]}>
            <MyOrganizationPage></MyOrganizationPage>
        </ProtectedPage>
    )
}

export default Organization