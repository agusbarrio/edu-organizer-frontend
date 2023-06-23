
import { Stack, Typography } from "@mui/material"
import PublicTemplate from "components/templates/PublicTemplate"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import Link from "components/generic/Link"
import useLocaleContext from "hooks/useLocaleContext"
import { useCallback, useState } from "react"
import RecoverPasswordForm from "components/forms/RecoverPasswordForm"
import useService from "hooks/useService"
import useRecoverPasswordService from "services/auth/useRecoverPasswordService"

function RecoverPage() {
    const { translate } = useLocaleContext()
    const [success, setSuccess] = useState(false)
    const { recoverPassword } = useRecoverPasswordService()

    const { runService, loading } = useService({ service: recoverPassword })

    const handleSubmit = useCallback(async ({ email }) => {
        const result = await runService({ email })
        if (result) setSuccess(true)
    }, [runService])

    return (
        <PublicTemplate title={translate(TEXTS.RECOVER_PAGE_TITLE)}>
            <Stack spacing={2} width={'100%'}>
                {success
                    ? <Typography>{translate(TEXTS.RECOVER_PAGE_SUCCESS)}</Typography>
                    : <RecoverPasswordForm onSubmit={handleSubmit} templateProps={{ submitButtonProps: { disabled: loading } }}></RecoverPasswordForm>
                }
                <Link href={PATHS.LOGIN}>{translate(TEXTS.RECOVER_PAGE_GO_BACK_LOGIN_LINK)}</Link>
            </Stack>
        </PublicTemplate>
    )
}

export default RecoverPage