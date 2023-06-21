import UsersDataTable from "components/dataTables/UsersDataTable"
import DashboardTemplate from "components/templates/DashboardTemplate"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useService from "hooks/useService"
import { useEffect } from "react"
import useGetAllUsersService from "services/users/useGetAllUsersService"

function UsersPage() {
    const { translate } = useLocaleContext()
    const { getAllUsers } = useGetAllUsersService()
    const { value: users, runService } = useService({ service: getAllUsers, defaultValue: [] })
    useEffect(() => {
        runService()
    }, [runService])
    return (
        <DashboardTemplate
            title={translate(TEXTS.USERS_PAGE_TITLE)}
            subtitle={translate(TEXTS.USERS_PAGE_SUBTITLE)}
        >
            <UsersDataTable users={users} onAllowRegistration={runService} onDenyRegistration={runService}></UsersDataTable>
        </DashboardTemplate>
    )
}

export default UsersPage