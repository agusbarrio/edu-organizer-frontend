import PageHead from "components/dataDisplay/PageHead"
import LoginForm from "components/forms/LoginForm"
import AccessManager from "components/managers/AccesssManager"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "contexts/LocaleContext/useLocaleContext"

function Login() {
    const { translate } = useLocaleContext()
    return (
        <>
            <PageHead title={translate(TEXTS.LOGIN_HEAD_TITLE)} description={translate(TEXTS.LOGIN_HEAD_DESCRIPTION)} />
            <AccessManager needUserSession={false}>
                <h1>{translate(TEXTS.LOGIN_PAGE_TITLE)}</h1>
                <LoginForm onSubmit={() => {
                    //Call service
                }}></LoginForm>
            </AccessManager>
        </>
    )
}

export default Login