import PageHead from "components/dataDisplay/PageHead"
import RegisterForm from "components/forms/RegisterForm"
import PublicTemplate from "components/templates/PublicTemplate"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useRegisterService from "services/auth/useRegisterService"
import { useRouter } from 'next/router'
import PATHS from "constants/PATHS"
import Link from "components/generic/Link"
import { Stack } from "@mui/material"

function RegisterPage() {
    const { translate } = useLocaleContext()
    const { register } = useRegisterService()
    const history = useRouter()
    return (
        <>
            <PageHead title={translate(TEXTS.REGISTER_HEAD_TITLE)} description={translate(TEXTS.REGISTER_HEAD_DESCRIPTION)} />
            <PublicTemplate title={translate(TEXTS.REGISTER_PAGE_TITLE)}>
                <Stack spacing={2} width={'100%'}>
                    <RegisterForm onSubmit={async ({ organizationName, firstName, lastName, email, password }) => {
                        await register({ organizationName, firstName, lastName, email, password }).then((result) => {
                            if (result) history.push(PATHS.LOGIN)
                        })
                    }}></RegisterForm>
                    <Link href={PATHS.LOGIN}>{translate(TEXTS.REGISTER_PAGE_LOGIN_LINK)}</Link>
                </Stack>

            </PublicTemplate>
        </>


    )
}

export default RegisterPage