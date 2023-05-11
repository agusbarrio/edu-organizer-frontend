import TeachersPage from "components/pages/TeachersPage"
import USER_PERMISSIONS from "constants/USER_PERMISSIONS"
import { SessionContextProvider } from "contexts/SessionContext"
import { authenticate } from "utils/auth"

function Teachers({ sessionData }) {
    return (
        <SessionContextProvider sessionData={sessionData}>
            <TeachersPage></TeachersPage>
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

export default Teachers