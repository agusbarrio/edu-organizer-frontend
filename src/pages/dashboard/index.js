import ProtectedPage from "components/managers/ProtectedPage"
import DashboardPage from "components/pageContents/DashboardPage"

function Dashboard() {
    return (
        <ProtectedPage needUserSession={true}>
            <DashboardPage></DashboardPage>
        </ProtectedPage>
    )
}

export default Dashboard