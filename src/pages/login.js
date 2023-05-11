import LoginPage from "components/pages/LoginPage"
import { authenticate } from "utils/auth"

function Login() {
    return (
        <LoginPage></LoginPage>
    )
}

export async function getServerSideProps(context) {
    const { redirectOptions } = await authenticate(context, { needUserSession: false })
    if (redirectOptions) {
        return redirectOptions
    }
    return {
        props: {},
    }
}

export default Login
