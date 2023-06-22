import DashboardTemplate from "components/templates/DashboardTemplate"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useService from "hooks/useService"
import useGetMyOrganizationService from "services/organization/useGetMyOrganizationService"
import { useEffect } from "react"
import { Grid } from "@mui/material"
import OrganizationDataCard from "components/dataDisplay/OrganizationDataCard"
import CORE_TEXTS from "constants/CORE_TEXTS"
import useNavigate from "hooks/useNavigate"
import PATHS from "constants/PATHS"
import { ArrowForward } from "@mui/icons-material"


function MyOrganizationPage() {
    const { getMyOrganization } = useGetMyOrganizationService()
    const { runService, loading, value: organization } = useService({ service: getMyOrganization, defaultValue: {} })
    const { go } = useNavigate()

    useEffect(() => {
        runService()
    }, [runService])

    const { translate } = useLocaleContext()

    return (
        <DashboardTemplate
            title={translate(TEXTS.MY_ORGANIZATION_PAGE_TITLE)}
            subtitle={translate(TEXTS.MY_ORGANIZATION_PAGE_SUBTITLE)}
            rightButtonProps={{
                children: translate(CORE_TEXTS.GENERIC_EDIT),
                onClick: () => go(PATHS.EDIT_ORGANIZATION),
                endIcon: <ArrowForward></ArrowForward>,
            }}
            loading={loading}
        >
            <Grid container spacing={2} sx={{ overflowY: 'auto', maxHeight: '100%' }}>
                <Grid item xs={12} md={6} >
                    <OrganizationDataCard organization={organization}></OrganizationDataCard>
                </Grid>
            </Grid>
        </DashboardTemplate >

    )
}

export default MyOrganizationPage