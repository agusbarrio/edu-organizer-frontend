import StudentPage from "components/pageContents/StudentPage"
import USER_PERMISSIONS from "constants/USER_PERMISSIONS"
import DataContextProvider from "contexts/DataContext"
import { SessionContextProvider } from "contexts/SessionContext"
import { authenticate } from "utils/auth"
import { getStudentServerSideProps } from "utils/students"

function Student({ sessionData, student }) {
    return (
        <SessionContextProvider sessionData={sessionData}>
            <DataContextProvider initialData={{ student }}>
                <StudentPage></StudentPage>
            </DataContextProvider>
        </SessionContextProvider>
    )
}

export async function getServerSideProps(context) {
    const { sessionData, redirectOptions } = await authenticate(context, { needUserSession: true, userPermissionsAllowed: [USER_PERMISSIONS.ADMIN] })
    const { student, redirectOptions: studentRedirectOptions } = await getStudentServerSideProps(context, sessionData)
    return {
        ...redirectOptions,
        ...studentRedirectOptions,
        props: { sessionData, student },
    }
}

export default Student
