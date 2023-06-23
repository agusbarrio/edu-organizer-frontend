import ProtectedPage from "components/managers/ProtectedPage"
import EditMyAccountPage from "components/pageContents/EditMyAccountPage"

function EditMyAccount() {
    return (
        <ProtectedPage needUserSession={true}>
            <EditMyAccountPage></EditMyAccountPage>
        </ProtectedPage>
    )
}

export default EditMyAccount