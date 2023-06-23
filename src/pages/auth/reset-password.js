import ProtectedPage from "components/managers/ProtectedPage";
import ResetPasswordPage from "components/pageContents/ResetPasswordPage";

function ResetPassword() {
    return (
        <ProtectedPage needUserSession={false}>
            <ResetPasswordPage></ResetPasswordPage>
        </ProtectedPage>
    )
}

export default ResetPassword
