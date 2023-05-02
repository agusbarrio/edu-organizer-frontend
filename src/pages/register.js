import PageHead from "components/dataDisplay/PageHead"
import RegisterForm from "components/forms/RegisterForm"
import AccessManager from "components/managers/AccesssManager"
import PublicTemplate from "components/templates/PublicTemplate"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useRegisterService from "services/auth/useRegisterService"
import { useRouter } from 'next/router'
import PATHS from "constants/PATHS"
function Register() {
    const { translate } = useLocaleContext()
    const { register } = useRegisterService()
    const history = useRouter()
    return (
        <PublicTemplate title={translate(TEXTS.REGISTER_PAGE_TITLE)}>
            <PageHead title={translate(TEXTS.REGISTER_HEAD_TITLE)} description={translate(TEXTS.REGISTER_HEAD_DESCRIPTION)} />
            <AccessManager needUserSession={false}>
                <RegisterForm onSubmit={async ({ organizationName, firstName, lastName, email, password }) => {
                    await register({ organizationName, firstName, lastName, email, password }).then(() => {
                        history.push(PATHS.LOGIN)
                    })
                }}></RegisterForm>
            </AccessManager>
        </PublicTemplate>
    )
}

export default Register