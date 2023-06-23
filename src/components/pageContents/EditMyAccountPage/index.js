import DashboardTemplate from "components/templates/DashboardTemplate"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import { Grid } from "@mui/material"
import UserDataCard from "components/dataDisplay/UserDataCard"
import CORE_TEXTS from "constants/CORE_TEXTS"
import useNavigate from "hooks/useNavigate"
import PATHS from "constants/PATHS"


function EditMyAccountPage() {
    const { translate } = useLocaleContext()
    const { go } = useNavigate()
    //TODO hacer formulario de cambiar datos de cuenta. hacer servicio de backend
    return (
        <DashboardTemplate
            title={translate(TEXTS.EDIT_MY_ACCOUNT_PAGE_TITLE)}
            subtitle={translate(TEXTS.EDIT_MY_ACCOUNT_PAGE_SUBTITLE)}
            backButtonProps={{
                children: translate(CORE_TEXTS.GENERIC_BACK),
                onClick: () => go(PATHS.MY_ACCOUNT),
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

export default EditMyAccountPage