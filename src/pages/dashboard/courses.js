import CoursesPage from "components/pages/CoursesPage"
import USER_PERMISSIONS from "constants/USER_PERMISSIONS"
import { SessionContextProvider } from "contexts/SessionContext"
import { authenticate } from "utils/auth"

function Courses({ sessionData }) {
    return (
        <SessionContextProvider sessionData={sessionData}>
            <CoursesPage></CoursesPage>
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

export default Courses