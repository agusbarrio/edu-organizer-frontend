import CoursePage from "components/pageContents/CoursePage"
import USER_PERMISSIONS from "constants/USER_PERMISSIONS"
import DataContextProvider from "contexts/DataContext"
import { SessionContextProvider } from "contexts/SessionContext"
import { authenticate } from "utils/auth"
import { getCourseServerSideProps } from "utils/courses"

function Course({ sessionData, course }) {
    return (
        <SessionContextProvider sessionData={sessionData}>
            <DataContextProvider initialData={{ course }}>
                <CoursePage></CoursePage>
            </DataContextProvider>
        </SessionContextProvider>
    )
}

export async function getServerSideProps(context) {
    const { sessionData, redirectOptions } = await authenticate(context, { needUserSession: true, userPermissionsAllowed: [USER_PERMISSIONS.ADMIN] })
    const { course, redirectOptions: courseRedirectOptions } = await getCourseServerSideProps(context, sessionData)
    return {
        ...redirectOptions,
        ...courseRedirectOptions,
        props: { sessionData, course },
    }
}

export default Course
