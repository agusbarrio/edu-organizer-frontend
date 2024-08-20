import Redirect from "components/navigation/Redirect";
import PATHS from "constants/PATHS";
import useSessionContext from "hooks/useSessionContext";
import { useMemo } from "react"
import _ from "lodash"
import LoadingBox from "components/dataDisplay/LoadingBox";
import { Box } from "@mui/material";
import { renderText } from "utils/text";

function ProtectedPage({ children, needUserSession, userPermissionsAllowed, needCourseSession }) {
    const { userSession, courseSession, loading } = useSessionContext();

    const redirectPath = useMemo(() => {
        let redirectPath = null
        if (needUserSession != undefined) {
            if (needUserSession && !userSession.token) {
                redirectPath = PATHS.LOGIN
            }
            if (!needUserSession && userSession.token) {
                redirectPath = PATHS.DASHBOARD
            }
            if (!_.isEmpty(userPermissionsAllowed) && userPermissionsAllowed.some((permission) => !userSession?.user?.permissions?.includes(permission))) {
                redirectPath = PATHS.LOGIN
            }
        }
        if (needCourseSession != undefined) {
            if (needCourseSession && !courseSession.token) {
                if (courseSession?.lastCourseLoggedShortId) {
                    redirectPath = renderText(PATHS.COURSE_LOGIN, { shortId: courseSession?.lastCourseLoggedShortId })
                } else {
                    redirectPath = PATHS.FORBIDDEN
                }
            }
            if (!needCourseSession && courseSession.token) {
                redirectPath = PATHS.COURSE
            }
        }
        return redirectPath
    }, [userSession, courseSession, needUserSession, needCourseSession, userPermissionsAllowed])


    return (
        <>
            {loading
                ? <Box sx={{ width: '100vw', height: '100dvh' }}><LoadingBox></LoadingBox></Box>
                :
                <>
                    {redirectPath ? <Redirect url={redirectPath} /> : children}
                </>
            }

        </>
    )
}

export default ProtectedPage