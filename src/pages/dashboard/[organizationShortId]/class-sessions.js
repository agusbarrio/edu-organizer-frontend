import ClassSessionsPage from "components/pageContents/ClassSessionsPage"
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
    return {
        ...redirectOptions,
        props: { sessionData },
    }
}

export default ClassSessions