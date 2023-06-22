import PublicTemplate from "components/templates/PublicTemplate"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import { Button, Stack } from "@mui/material"
import useService from "hooks/useService"
import { useCallback } from "react"
import useNavigate from "hooks/useNavigate"
import PATHS from "constants/PATHS"
import useVerifyAccountService from "services/auth/useVerifyAccountService"

function VerifyAccountPage() {
    const { translate } = useLocaleContext()
    const { verifyAccount } = useVerifyAccountService()
    const { runService, loading } = useService({ service: verifyAccount })
    const { params, go } = useNavigate()

    const handleClick = useCallback(async () => {
        const result = await runService({ token: params.token })
        if (result) go(PATHS.LOGIN)
    }, [runService, params, go])


    return (
        <PublicTemplate title={translate(TEXTS.VERIFY_ACCOUNT_PAGE_TITLE)}>
            <Stack spacing={2} width={'100%'}>
                <Button variant="contained" onClick={handleClick} disabled={loading}>{translate(TEXTS.VERIFY_ACCOUNT_BUTTON)}</Button>
            </Stack>
        </PublicTemplate>
    )
}

export default VerifyAccountPage