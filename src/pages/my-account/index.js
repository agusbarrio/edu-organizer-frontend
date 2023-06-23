import ProtectedPage from "components/managers/ProtectedPage"
import MyAccountPage from "components/pageContents/MyAccountPage"

function MyAccount() {
    return (
        <ProtectedPage needUserSession={true}>
            <MyAccountPage></MyAccountPage>
        </ProtectedPage>
    )
}

export default MyAccount