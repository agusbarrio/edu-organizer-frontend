import RegisterPage from "components/pageContents/RegisterPage"
import { authenticate } from "utils/auth"
function Register() {
    return (
        <RegisterPage></RegisterPage>
    )
}

export async function getServerSideProps(context) {
    const { redirectOptions } = await authenticate(context, { needUserSession: false })
    return {
        ...redirectOptions,
        props: {},
    }
}

export default Register