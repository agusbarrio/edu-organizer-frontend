import Redirect from "components/navigation/Redirect";
import PATHS from "constants/PATHS";
import useSessionContext from "hooks/useSessionContext";
import { useMemo } from "react"
import _ from "lodash"
import LoadingBox from "components/dataDisplay/LoadingBox";

function ProtectedPage({ children, needUserSession, userPermissionsAllowed, needCourseSession }) {
    const { user, course, loading } = useSessionContext();

    const redirectPath = useMemo(() => {
        let redirectPath = null
        if (needUserSession != undefined) {
            if (needUserSession && !user.logged) {
                redirectPath = PATHS.LOGIN
            }
            if (!needUserSession && user.logged) {
                redirectPath = PATHS.DASHBOARD
            }
            if (!_.isEmpty(userPermissionsAllowed) && userPermissionsAllowed.some((permission) => !user.permissions?.includes(permission))) {
                redirectPath = PATHS.LOGIN
            }
        }
        if (needCourseSession != undefined) {
            if (needCourseSession && !course.logged) {
                redirectPath = PATHS.LOGIN_COURSE
            }
            if (!needCourseSession && course.courseLogged) {
                redirectPath = PATHS.COURSE
            }
        }
        return redirectPath
    }, [user, course, needUserSession, needCourseSession, userPermissionsAllowed])


    return (
        <>
            {loading
                ? <LoadingBox></LoadingBox>
                :
                <>
                    {redirectPath ? <Redirect url={redirectPath} /> : children}
                </>
            }

        </>
    )
}

export default ProtectedPage