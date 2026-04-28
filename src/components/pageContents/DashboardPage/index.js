import DashboardTemplate from "components/templates/DashboardTemplate"
import { Stack, Typography } from "@mui/material"
import useLocaleContext from "hooks/useLocaleContext"
import TEXTS from "constants/TEXTS"

function DashboardPage() {
    const { translate } = useLocaleContext()

    return (
        <DashboardTemplate >
            <Stack alignItems="center" justifyContent="center" height="100%">
                <Typography variant="h4" fontWeight="bold" textAlign="center">
                    {translate(TEXTS.DASHBOARD_WELCOME_TITLE)}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" textAlign="center">
                    {translate(TEXTS.DASHBOARD_WELCOME_SUBTITLE)}
                </Typography>
            </Stack>
        </DashboardTemplate>
    )
}

export default DashboardPage