import AccessManager from "components/managers/AccesssManager"
import LoginPage from "components/pages/LoginPage"

function Login() {
    return (
        <AccessManager needUserSession={false}>
            <LoginPage></LoginPage>
        </AccessManager>
    )
}

export default Login
