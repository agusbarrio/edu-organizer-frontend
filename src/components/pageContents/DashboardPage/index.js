import DashboardTemplate from "components/templates/DashboardTemplate"
import { Box, Stack, Typography } from "@mui/material"
import useLocaleContext from "hooks/useLocaleContext"
import TEXTS from "constants/TEXTS"
import { useEffect } from "react"
import useGetMyUserService from "services/user/useGetMyUserService"
import useService from "hooks/useService"

function DashboardPage() {
    const { translate } = useLocaleContext()
    const { getMyUser } = useGetMyUserService()
    const { runService, loading, value: myUser } = useService({ service: getMyUser })

    useEffect(() => {
        runService()
    }, [runService])

    return (
        <DashboardTemplate loading={loading}>
            <Stack alignItems="center" justifyContent="center" height="100%">
                <Typography variant="h4" fontWeight="bold" textAlign="center" component="div">
                    {myUser?.firstName ? (
                        <>
                            {translate(TEXTS.DASHBOARD_WELCOME_BEFORE_NAME)}
                            <Box component="span" sx={{ color: "primary.main" }}>
                                {myUser.firstName}
                            </Box>
                            {translate(TEXTS.DASHBOARD_WELCOME_AFTER_NAME)}
                        </>
                    ) : (
                        translate(TEXTS.DASHBOARD_WELCOME_TITLE)
                    )}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" textAlign="center">
                    {translate(TEXTS.DASHBOARD_WELCOME_SUBTITLE)}
                </Typography>
            </Stack>
        </DashboardTemplate>
    )
}

export default DashboardPage