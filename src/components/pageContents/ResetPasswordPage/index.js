
import { Stack } from "@mui/material"
import PublicTemplate from "components/templates/PublicTemplate"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import { useCallback } from "react"
import ChangePasswordForm from "components/forms/ChangePasswordForm"
import useService from "hooks/useService"
import useResetPasswordService from "services/auth/useResetPasswordService"
import useNavigate from "hooks/useNavigate"

function ResetPasswordPage() {
    const { translate } = useLocaleContext()

    const { resetPassword } = useResetPasswordService()
    const { params, go } = useNavigate()
    const { runService, loading } = useService({ service: resetPassword })

    const handleSubmit = useCallback(async ({ password }) => {
        const result = await runService({ password, token: params.token })
        if (result) go(PATHS.LOGIN)
    }, [runService, params, go])

    return (
        <PublicTemplate title={translate(TEXTS.RECOVER_PAGE_TITLE)}>
            <Stack spacing={2} width={'100%'}>
                <ChangePasswordForm onSubmit={handleSubmit} templateProps={{ submitButtonProps: { disabled: loading } }}></ChangePasswordForm>
            </Stack>
        </PublicTemplate>
    )
}

export default ResetPasswordPage