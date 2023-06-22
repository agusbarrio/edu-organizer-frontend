
import OrganizationsDataTable from "components/dataTables/OrganizationsDataTable"
import DashboardTemplate from "components/templates/DashboardTemplate"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useService from "hooks/useService"
import { useEffect } from "react"
import useGetAllOrganizationsService from "services/organizations/useGetAllOrganizationsService"

function OrganizationsPage() {
    const { translate } = useLocaleContext()
    const { getAllOrganizations } = useGetAllOrganizationsService()
    const { value: organizations, runService } = useService({ service: getAllOrganizations, defaultValue: [] })
    useEffect(() => {
        runService()
    }, [runService])
    return (
        <DashboardTemplate
            title={translate(TEXTS.ORGANIZATIONS_PAGE_TITLE)}
            subtitle={translate(TEXTS.ORGANIZATIONS_PAGE_SUBTITLE)}
        >
            <OrganizationsDataTable organizations={organizations} onDelete={runService}></OrganizationsDataTable>
        </DashboardTemplate>
    )
}

export default OrganizationsPage