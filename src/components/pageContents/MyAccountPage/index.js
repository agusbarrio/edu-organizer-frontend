import DashboardTemplate from "components/templates/DashboardTemplate"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import { Grid } from "@mui/material"
import UserDataCard from "components/dataDisplay/UserDataCard"
import CORE_TEXTS from "constants/CORE_TEXTS"
import useNavigate from "hooks/useNavigate"
import PATHS from "constants/PATHS"
import { ArrowForward } from "@mui/icons-material"


function MyAccountPage() {
    const { translate } = useLocaleContext()
    const { go } = useNavigate()
    //TODO conseguir el usuario. hacer servicio en backend
    //TODO implemenetar cambio de contraseña
    return (
        <DashboardTemplate
            title={translate(TEXTS.MY_ACCOUNT_PAGE_TITLE)}
            subtitle={translate(TEXTS.MY_ACCOUNT_PAGE_SUBTITLE)}
            rightButtonProps={{
                children: translate(CORE_TEXTS.GENERIC_EDIT),
                onClick: () => go(PATHS.EDIT_MY_ACCOUNT),
                endIcon: <ArrowForward></ArrowForward>,
            }}
        >
            <Grid container spacing={2} sx={{ overflowY: 'auto', maxHeight: '100%' }}>
                <Grid item xs={12} md={6} >
                    <UserDataCard></UserDataCard>
                </Grid>
            </Grid>
        </DashboardTemplate >

    )
}

export default MyAccountPage