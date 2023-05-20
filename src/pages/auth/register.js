import ProtectedPage from "components/managers/ProtectedPage"
import RegisterPage from "components/pageContents/RegisterPage"

function Register() {

    return (
        <ProtectedPage needUserSession={false}>
            <RegisterPage></RegisterPage>
        </ProtectedPage>
    )
}

export default Register