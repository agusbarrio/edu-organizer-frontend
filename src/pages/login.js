import LoginPage from "components/pageContents/LoginPage"
import { authenticate } from "utils/auth"

function Login() {
    return (
        <LoginPage></LoginPage>
    )
}

export async function getServerSideProps(context) {
    const { redirectOptions } = await authenticate(context, { needUserSession: false })
    return {
        ...redirectOptions,
        props: {},
    }
}

export default Login
