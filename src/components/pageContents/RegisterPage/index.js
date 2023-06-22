import PageHead from "components/dataDisplay/PageHead"
import RegisterForm from "components/forms/RegisterForm"
import PublicTemplate from "components/templates/PublicTemplate"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useRegisterService from "services/auth/useRegisterService"
import PATHS from "constants/PATHS"
import Link from "components/generic/Link"
import { Stack, Typography } from "@mui/material"
import useService from "hooks/useService"
import { useCallback, useState } from "react"

function RegisterPage() {
    const { translate } = useLocaleContext()
    const { register } = useRegisterService()
    const [registered, setRegistered] = useState(false)
    const { runService, loading } = useService({ service: register })

    const handleSubmit = useCallback(async ({ organizationName, firstName, lastName, email, password }) => {
        const result = await runService({ organizationName, firstName, lastName, email, password })
        if (result) setRegistered(true)
    }, [runService])

    return (
        <>
            <PageHead title={translate(TEXTS.REGISTER_HEAD_TITLE)} description={translate(TEXTS.REGISTER_HEAD_DESCRIPTION)} />
            <PublicTemplate title={translate(TEXTS.REGISTER_PAGE_TITLE)}>
                <Stack spacing={2} width={'100%'}>
                    {registered
                        ? <Typography>{translate(TEXTS.REGITER_PAGE_SUCCESS_MESSAGE)}</Typography>
                        : <RegisterForm templateProps={{ submitButtonProps: { disabled: loading } }} onSubmit={handleSubmit}></RegisterForm>}
                    <Link href={PATHS.LOGIN}>{translate(TEXTS.REGISTER_PAGE_LOGIN_LINK)}</Link>
                </Stack>

            </PublicTemplate>
        </>


    )
}

export default RegisterPage