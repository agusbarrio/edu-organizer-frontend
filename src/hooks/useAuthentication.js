import { useEffect } from "react"
import useSessionContext from "./useSessionContext";
import PATHS from "constants/PATHS";
import _ from "lodash";
import useNavigate from "./useNavigate";
function useAuthentication({ needUserSession, userPermissionsAllowed, needCourseSession } = {}) {
    const { userLogout, courseLogout, user, course } = useSessionContext();
    const { go } = useNavigate()

    useEffect(() => {
        if (needUserSession != undefined) {
            if (needUserSession && !user.logged) {
                userLogout()
                go(PATHS.LOGIN)
            }
            if (!needUserSession && user.logged) {
                go(PATHS.DASHBOARD)
            }
            if (!_.isEmpty(userPermissionsAllowed) && userPermissionsAllowed.some((permission) => !user.permissions?.includes(permission))) {
                userLogout()
                go(PATHS.LOGIN)
            }
        }
        if (needCourseSession != undefined) {
            if (needCourseSession && !course.logged) {
                courseLogout()
                go(PATHS.LOGIN)
            }
            if (!needCourseSession && course.courseLogged) {
                go(PATHS.COURSE)
            }
        }
    }, [user, course, userLogout, courseLogout, needUserSession, needCourseSession, userPermissionsAllowed, go])

}

export default useAuthentication
