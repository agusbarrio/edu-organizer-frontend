import PATHS from "constants/PATHS";
import { AUTH_ENDPOINTS } from "constants/ENDPOINTS";
import { get } from 'utils/fetch'
import _ from "lodash";
import COOKIES from "constants/COOKIES";
import { renderText } from "./text";

async function checkSession(context, { needUserSession, userPermissionsAllowed = [], needCourseSession }) {
    let redirectPath = null;
    let courseSession = null;
    let userSession = null;
    let clearCookie = false;
    if (needUserSession != undefined) {
        const Cookie = context.req.cookies[COOKIES.SESSION] ? `${COOKIES.SESSION}=${context.req.cookies[COOKIES.SESSION]};` : undefined;
        const response = await get(AUTH_ENDPOINTS.VERIFY_SESSION, { headers: { Cookie } }) ?? null;
        userSession = response?.data ?? null;
        const permissions = userSession?.user?.permissions ?? []
        if (needUserSession && !userSession) {
            redirectPath = PATHS.LOGIN
            clearCookie = true;
        };

        if ((!needUserSession && userSession)) {
            redirectPath = renderText(PATHS.DASHBOARD, { organizationShortId: userSession?.organization?.shortId })
        }
        if (!_.isEmpty(userPermissionsAllowed) && userPermissionsAllowed.some((permission) => !permissions?.includes(permission))) {
            redirectPath = PATHS.LOGIN
            clearCookie = true;
        }
        if (userSession && context?.params?.organizationShortId && context.params.organizationShortId !== userSession?.organization?.shortId) {
            redirectPath = context.resolvedUrl.replace(context.params.organizationShortId, userSession?.organization?.shortId)
        }
        if (clearCookie) context.res.setHeader('Set-Cookie', `${COOKIES.SESSION}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`)
    }
    if (needCourseSession != undefined) {
        const Cookie = context.req.cookies[COOKIES.COURSE] ? `${COOKIES.COURSE}=${context.req.cookies[COOKIES.COURSE]};` : undefined;
        const response = await get(AUTH_ENDPOINTS.VERIFY_SESSION_COURSE, { headers: { Cookie } }) ?? null;
        courseSession = response?.data ?? null;
        if (needCourseSession && !courseSession) {
            redirectPath = PATHS.LOGIN
        };
        if (!needCourseSession && courseSession) {
            redirectPath = PATHS.COURSE_SELECTION
            clearCookie = true;
        }
        if (clearCookie) context.res.setHeader('Set-Cookie', `${COOKIES.COURSE}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`)
    }
    return { redirectPath, sessionData: { ...userSession, ...courseSession } }
}
//Validation for getServerSideProps
export async function authenticate(context, { needUserSession, userPermissionsAllowed, needCourseSession }) {

    const { sessionData, redirectPath } = await checkSession(context, { needUserSession, userPermissionsAllowed, needCourseSession });
    const result = { sessionData }
    if (redirectPath) {
        result.redirectOptions = {
            redirect: {
                destination: redirectPath,
                permanent: false,
            },
        }
    }
    return result
}

