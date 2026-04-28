import DashboardTemplate from "components/templates/DashboardTemplate"
import { Stack, Typography } from "@mui/material"
import useLocaleContext from "hooks/useLocaleContext"
import TEXTS from "constants/TEXTS"
import { useEffect, useMemo } from "react"
import useGetMyUserService from "services/user/useGetMyUserService"
import useService from "hooks/useService"

function DashboardPage() {
    const { translate } = useLocaleContext()
    const { getMyUser } = useGetMyUserService()
    const { runService, loading, value: myUser } = useService({ service: getMyUser })

    useEffect(() => {
        runService()
    }, [runService])

    const welcomeTitle = useMemo(() => {
        if (myUser?.firstName) {
            return translate(TEXTS.DASHBOARD_WELCOME_TITLE_WITH_NAME, { firstName: myUser.firstName })
        }
        return translate(TEXTS.DASHBOARD_WELCOME_TITLE)
    }, [myUser?.firstName, translate])

    return (
        <DashboardTemplate loading={loading}>
            <Stack alignItems="center" justifyContent="center" height="100%">
                <Typography variant="h4" fontWeight="bold" textAlign="center">
                    {welcomeTitle}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" textAlign="center">
                    {translate(TEXTS.DASHBOARD_WELCOME_SUBTITLE)}
                </Typography>
            </Stack>
        </DashboardTemplate>
    )
}

export default DashboardPage