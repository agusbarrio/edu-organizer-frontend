import ProtectedPage from "components/managers/ProtectedPage"
import VerifyAccountPage from "components/pageContents/VerifyAccountPage"


function VerifyAccount() {

    return (
        <ProtectedPage needUserSession={false}>
            <VerifyAccountPage></VerifyAccountPage>
        </ProtectedPage>
    )
}

export default VerifyAccount