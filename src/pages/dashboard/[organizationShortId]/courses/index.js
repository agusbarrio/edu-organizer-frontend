import CoursesPage from "components/pageContents/CoursesPage"
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
    return {
        ...redirectOptions,
        props: { sessionData },
    }
}

export default Courses