import RegisterPage from "components/pages/RegisterPage"
import { authenticate } from "utils/auth"
function Register() {
    return (
        <RegisterPage></RegisterPage>
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

export default Register