import ClassSessionsPage from "components/pages/ClassSessionsPage"
import USER_PERMISSIONS from "constants/USER_PERMISSIONS"
import { SessionContextProvider } from "contexts/SessionContext"
import { authenticate } from "utils/auth"

function ClassSessions({ sessionData }) {
    return (
        <SessionContextProvider sessionData={sessionData}>
            <ClassSessionsPage></ClassSessionsPage>
        </SessionContextProvider>
    )
}

export async function getServerSideProps(context) {
    const { redirectOptions, sessionData } = await authenticate(context, { needUserSession: true, userPermissionsAllowed: [USER_PERMISSIONS.ADMIN] })
    if (redirectOptions) {
        return redirectOptions
    }
    return {
        props: { sessionData },
    }
}

export default ClassSessions