import ProtectedPage from "components/managers/ProtectedPage";
import LoginPage from "components/pageContents/LoginPage"

function Login() {

    return (
        <ProtectedPage needUserSession={false}>
            <LoginPage></LoginPage>
        </ProtectedPage>
    )
}

export default Login
