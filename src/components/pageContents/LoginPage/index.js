import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Alert, Button, Divider, Stack } from "@mui/material"
import LoginForm from "components/forms/LoginForm"
import PublicTemplate from "components/templates/PublicTemplate"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import { AUTH_ENDPOINTS } from "constants/ENDPOINTS"
import Link from "components/generic/Link"
import useLocaleContext from "hooks/useLocaleContext"
import useLoginService from "services/auth/useLoginService"
import useSessionContext from "hooks/useSessionContext"

function LoginPage() {
    const { translate } = useLocaleContext()
    const router = useRouter()
    const searchParams = useSearchParams()
    const { userLogin } = useSessionContext()
    const { login } = useLoginService()
    const [oauthErrorBanner, setOauthErrorBanner] = useState(false)

    const oauthError = searchParams.get("error")

    useEffect(() => {
        if (oauthError !== "oauth_unauthorized") return
        setOauthErrorBanner(true)
        router.replace(PATHS.LOGIN)
    }, [oauthError, router])

    return (
        <PublicTemplate title={translate(TEXTS.LOGIN_PAGE_TITLE)}>
            <Stack spacing={2} width={"100%"}>
                <LoginForm onSubmit={async ({ email, password }) => {
                    const result = await login({ email, password })
                    if (result) {
                        userLogin({
                            ...result,
                            user: {
                                ...result.user,
                                permissions: result.user.permissions.map(({ permission }) => permission)
                            }
                        })
                    }
                }}></LoginForm>
                {oauthErrorBanner ? (
                    <Alert severity="error">{translate(TEXTS.LOGIN_PAGE_OAUTH_ERROR)}</Alert>
                ) : null}
                <Divider>{translate(TEXTS.LOGIN_PAGE_OAUTH_DIVIDER)}</Divider>
                <Stack spacing={1}>
                    <Button
                        fullWidth
                        variant="outlined"
                        size="large"
                        onClick={() => {
                            window.location.href = AUTH_ENDPOINTS.OAUTH_GOOGLE
                        }}
                    >
                        {translate(TEXTS.LOGIN_PAGE_GOOGLE_BUTTON)}
                    </Button>
                    <Button
                        fullWidth
                        variant="outlined"
                        size="large"
                        onClick={() => {
                            window.location.href = AUTH_ENDPOINTS.OAUTH_MICROSOFT
                        }}
                    >
                        {translate(TEXTS.LOGIN_PAGE_MICROSOFT_BUTTON)}
                    </Button>
                </Stack>
                <Link href={PATHS.RECOVER_PASSWORD}>{translate(TEXTS.LOGIN_PAGE_RECOVER_PASSWORD_LINK)}</Link>
            </Stack>
        </PublicTemplate>
    )
}

export default LoginPage
