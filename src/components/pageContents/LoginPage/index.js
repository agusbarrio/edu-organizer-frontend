import { useEffect, useMemo, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Alert, Button, Divider, Stack } from "@mui/material"
import LoginForm from "components/forms/LoginForm"
import { GoogleIcon, MicrosoftIcon } from "components/generic/icons/OAuthProviderIcons"
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

    const oauthButtonSx = useMemo(() => ({
        justifyContent: "flex-start",
        gap: 1.5,
        py: 1.35,
        px: 2,
        textTransform: "none",
        fontWeight: 600,
        borderRadius: 2,
        borderWidth: 1,
        bgcolor: "background.paper",
        borderColor: "divider",
        color: "text.primary",
        boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
        "&:hover": {
            bgcolor: "action.hover",
            borderColor: "action.hover",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        },
        justifyContent: "center",
    }), [])

    const oauthError = searchParams.get("error")

    useEffect(() => {
        if (oauthError !== "oauth_unauthorized") return
        setOauthErrorBanner(true)
        router.replace(PATHS.LOGIN)
    }, [oauthError, router])

    return (
        <PublicTemplate title={translate(TEXTS.LOGIN_PAGE_TITLE)}>
            <Stack spacing={2} width={"100%"}>
                <LoginForm
                    submitRowStart={(
                        <Link href={PATHS.RECOVER_PASSWORD} sx={{ typography: "body2" }}>
                            {translate(TEXTS.LOGIN_PAGE_RECOVER_PASSWORD_LINK)}
                        </Link>
                    )}
                    onSubmit={async ({ email, password }) => {
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
                    }}
                />
                {oauthErrorBanner ? (
                    <Alert severity="error">{translate(TEXTS.LOGIN_PAGE_OAUTH_ERROR)}</Alert>
                ) : null}
                <Divider>{translate(TEXTS.LOGIN_PAGE_OAUTH_DIVIDER)}</Divider>
                <Stack spacing={1.5}>
                    <Button
                        fullWidth
                        variant="outlined"
                        size="large"
                        startIcon={<GoogleIcon />}
                        sx={oauthButtonSx}
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
                        startIcon={<MicrosoftIcon />}
                        sx={oauthButtonSx}
                        onClick={() => {
                            window.location.href = AUTH_ENDPOINTS.OAUTH_MICROSOFT
                        }}
                    >
                        {translate(TEXTS.LOGIN_PAGE_MICROSOFT_BUTTON)}
                    </Button>
                </Stack>
            </Stack>
        </PublicTemplate>
    )
}

export default LoginPage
