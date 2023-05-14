import DashboardPage from "components/pageContents/DashboardPage"
import USER_PERMISSIONS from "constants/USER_PERMISSIONS"
import { SessionContextProvider } from "contexts/SessionContext"
import { authenticate } from "utils/auth"


function Dashboard({ sessionData }) {
    return (
        <SessionContextProvider sessionData={sessionData}>
            <DashboardPage></DashboardPage>
        </SessionContextProvider>

    )
}

export async function getServerSideProps(context) {
    const { sessionData, redirectOptions } = await authenticate(context, { needUserSession: true, userPermissionsAllowed: [USER_PERMISSIONS.ADMIN] })
    return {
        ...redirectOptions,
        props: { sessionData },
    }
}

export default Dashboard