import { Stack } from "@mui/material"
import CompleteAccountForm from "components/forms/CompleteAccountForm"
import PublicTemplate from "components/templates/PublicTemplate"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import useService from "hooks/useService"
import { useCallback } from "react"
import useCompleteAccountService from "services/auth/useCompleteAccountService"

function CompleteAccountPage() {
    const { translate } = useLocaleContext()
    const { completeAccount } = useCompleteAccountService()
    const { params, go } = useNavigate()
    const { runService, loading } = useService({ service: completeAccount })

    const handleSubmit = useCallback(async ({ firstName, lastName, password }) => {
        const result = await runService({ token: params.token, firstName, lastName, password })
        if (result) go(PATHS.LOGIN)
    }, [go, params.token, runService])

    return (
        <PublicTemplate title={translate(TEXTS.COMPLETE_ACCOUNT_PAGE_TITLE)}>
            <Stack spacing={2} width={'100%'}>
                <CompleteAccountForm onSubmit={handleSubmit} templateProps={{ submitButtonProps: { disabled: loading } }} />
            </Stack>
        </PublicTemplate>
    )
}

export default CompleteAccountPage
