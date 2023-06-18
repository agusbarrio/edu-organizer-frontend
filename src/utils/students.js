
import PATHS from "constants/PATHS";
import { STUDENTS_ENDPOINTS } from "constants/ENDPOINTS";
import { get } from 'utils/fetch'
import COOKIES from "constants/COOKIES";
import { renderText } from "./text";

export async function getStudentServerSideProps(context, sessionData) {
    const result = {
        redirectOptions: null,
        student: null
    }
    if (!sessionData?.user) return result
    const studentId = context?.params?.studentId ?? null;

    const Cookie = context.req.cookies[COOKIES.SESSION] ? `${COOKIES.SESSION}=${context.req.cookies[COOKIES.SESSION]};` : undefined;
    const response = await get(`${STUDENTS_ENDPOINTS.STUDENTS}/${studentId}`, { headers: { Cookie } })
    const student = response?.data ?? null;
    if (student) {
        result.student = student
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
