
import { Stack } from "@mui/material"
import LoginForm from "components/forms/LoginForm"
import PublicTemplate from "components/templates/PublicTemplate"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import Link from "core/components/Link"
import useLocaleContext from "hooks/useLocaleContext"

import useLoginService from "services/auth/useLoginService"

function LoginPage() {
    const { translate } = useLocaleContext()
    const { login } = useLoginService()
    return (
        <PublicTemplate title={translate(TEXTS.LOGIN_PAGE_TITLE)}>
            <Stack spacing={2} width={'100%'}>
                <LoginForm onSubmit={async ({ email, password }) => {
                    await login({ email, password })
                }}></LoginForm>
                <Link href={PATHS.RECOVER_PASSWORD}>{translate(TEXTS.LOGIN_PAGE_RECOVER_PASSWORD_LINK)}</Link>
                <Link href={PATHS.REGISTER}>{translate(TEXTS.LOGIN_PAGE_REGISTER_LINK)}</Link>
            </Stack>
        </PublicTemplate>
    )
}

export default LoginPage