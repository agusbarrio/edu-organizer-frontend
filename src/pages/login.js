import PageHead from "components/dataDisplay/PageHead"
import LoginForm from "components/forms/LoginForm"
import AccessManager from "components/managers/AccesssManager"
import PublicTemplate from "components/templates/PublicTemplate"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useLoginService from "services/auth/useLoginService"

function Login() {
    const { translate } = useLocaleContext()
    const { login } = useLoginService()
    return (
        <PublicTemplate title={translate(TEXTS.LOGIN_PAGE_TITLE)}>
            <PageHead title={translate(TEXTS.LOGIN_HEAD_TITLE)} description={translate(TEXTS.LOGIN_HEAD_DESCRIPTION)} />
            <AccessManager needUserSession={false}>
                <LoginForm onSubmit={async ({ email, password }) => {
                    await login({ email, password })
                }}></LoginForm>
            </AccessManager>
        </PublicTemplate>
    )
}

export default Login