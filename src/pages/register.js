import AccessManager from "components/managers/AccesssManager"
import RegisterPage from "components/pages/RegisterPage"
function Register() {
    return (
        <AccessManager needUserSession={false}>
            <RegisterPage></RegisterPage>
        </AccessManager>
    )
}

export default Register