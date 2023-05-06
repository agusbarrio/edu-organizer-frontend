import AccessManager from "components/managers/AccesssManager"
import DashboardPage from "components/pages/DashboardPage"

function Dashboard() {
    return (
        <AccessManager needUserSession={true}>
            <DashboardPage></DashboardPage>
        </AccessManager>
    )
}

export default Dashboard