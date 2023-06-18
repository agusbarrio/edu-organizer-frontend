
import PATHS from "constants/PATHS";
import { COURSES_ENDPOINTS } from "constants/ENDPOINTS";
import { get } from 'utils/fetch'
import COOKIES from "constants/COOKIES";
import { renderText } from "./text";

export async function getCourseServerSideProps(context, sessionData) {
    const result = {
        redirectOptions: null,
        course: null
    }
    if (!sessionData?.user) return result
    const courseId = context?.params?.courseId ?? null;

    const Cookie = context.req.cookies[COOKIES.SESSION] ? `${COOKIES.SESSION}=${context.req.cookies[COOKIES.SESSION]};` : undefined;
    const response = await get(`${COURSES_ENDPOINTS.COURSES}/${courseId}`, { headers: { Cookie } })
    const course = response?.data ?? null;
    if (course) {
        result.course = course
    } else {
        result.redirectOptions = {
            redirect: {
                destination: renderText(PATHS.DASHBOARD, { organizationShortId: sessionData?.organization?.shortId }),
                permanent: false
            }

        }
    }
    return result
}
