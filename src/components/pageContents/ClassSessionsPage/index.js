import ClassSessionsTable from "components/dataTables/ClassSessionsTable"
import DashboardTemplate from "components/templates/DashboardTemplate"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useService from "hooks/useService"
import { useEffect } from "react"
import useGetAllClassSessionsService from "services/classSessions/useGetAllClassSessionsService"

function ClassSessionsPage() {
    const { translate } = useLocaleContext()
    const { getAllClassSessions } = useGetAllClassSessionsService()
    const { value: classSessions, loading, runService } = useService({ service: getAllClassSessions, defaultValue: [] })
    useEffect(() => {
        runService()
    }, [runService])
    return (
        <DashboardTemplate
            title={translate(TEXTS.CLASS_SESSIONS_PAGE_TITLE)}
            subtitle={translate(TEXTS.CLASS_SESSIONS_PAGE_SUBTITLE)}
            loading={loading}
        >
            <ClassSessionsTable classSessions={classSessions}></ClassSessionsTable>
        </DashboardTemplate>
    )
}

export default ClassSessionsPage