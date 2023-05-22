import ProtectedPage from "components/managers/ProtectedPage";
import RecoverPage from "components/pageContents/RecoverPage";

function Login() {

    return (
        <ProtectedPage needUserSession={false}>
            <RecoverPage></RecoverPage>
        </ProtectedPage>
    )
}

export default Login
