import ProtectedPage from "components/managers/ProtectedPage"
import ControlsPage from "components/pageContents/ControlsPage"
import USER_PERMISSIONS from "constants/USER_PERMISSIONS"

function Controls() {

    return (
        <ProtectedPage needUserSession={true} userPermissionsAllowed={[USER_PERMISSIONS.SUPERADMIN]}>
            <ControlsPage></ControlsPage>
        </ProtectedPage>
    )
}

export default Controls