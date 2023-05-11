import DashboardPage from "components/pages/DashboardPage"
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
    if (redirectOptions) {
        return redirectOptions
    }
    return {
        props: { sessionData },
    }
}

export default Dashboard