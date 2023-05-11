import ENV_CONFIG from "./ENV_CONFIG";

const authBaseUrl = `${ENV_CONFIG.NEXT_PUBLIC_API_URL}/auth`;
const coursesBaseUrl = `${ENV_CONFIG.NEXT_PUBLIC_API_URL}/courses`;
export const AUTH_ENDPOINTS = {
    LOGIN: `${authBaseUrl}/login`,
    REGISTER: `${authBaseUrl}/register`,
    LOGOUT: `${authBaseUrl}/logout`,
    REQUEST_PASSWORD_RECOVERY: `${authBaseUrl}/requestPasswordRecovery`,
    RESET_PASSWORD: `${authBaseUrl}/resetPassword`,
    VERIFY_SESSION: `${authBaseUrl}/verifySession`,
    VERIFY_SESSION_COURSE: `${authBaseUrl}/verifySessionCourse`,
};

export const COURSES_ENDPOINTS = {
    COURSES: `${coursesBaseUrl}`,
    COURSE_ID: `${coursesBaseUrl}/:id`,
};
