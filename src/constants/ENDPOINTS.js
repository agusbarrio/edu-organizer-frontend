import ENV_CONFIG from "./ENV_CONFIG";

const authBaseUrl = `${ENV_CONFIG.NEXT_PUBLIC_API_URL}/auth`;
const coursesBaseUrl = `${ENV_CONFIG.NEXT_PUBLIC_API_URL}/courses`;
const courseAccessBaseUrl = `${ENV_CONFIG.NEXT_PUBLIC_API_URL}/course`;
const studentsBaseUrl = `${ENV_CONFIG.NEXT_PUBLIC_API_URL}/students`;
const usersBaseUrl = `${ENV_CONFIG.NEXT_PUBLIC_API_URL}/users`;
const organizationsBaseUrl = `${ENV_CONFIG.NEXT_PUBLIC_API_URL}/organizations`;
const organizationBaseUrl = `${ENV_CONFIG.NEXT_PUBLIC_API_URL}/organization`;

export const AUTH_ENDPOINTS = {
    LOGIN: `${authBaseUrl}/login`,
    COURSE_LOGIN: `${authBaseUrl}/course/{{shortId}}/login`,
    REGISTER: `${authBaseUrl}/register`,
    LOGOUT: `${authBaseUrl}/logout`,
    REQUEST_PASSWORD_RECOVERY: `${authBaseUrl}/requestPasswordRecovery`,
    RESET_PASSWORD: `${authBaseUrl}/resetPassword`,
    VERIFY_SESSION: `${authBaseUrl}/verifySession`,
    VERIFY_SESSION_COURSE: `${authBaseUrl}/verifySessionCourse`,
    VERIFY_ACCOUNT: `${authBaseUrl}/verifyAccount`,
};

export const COURSES_ENDPOINTS = {
    COURSES: `${coursesBaseUrl}`,
};
export const COURSE_ACCESS_ENDPOINTS = {
    COURSE: `${courseAccessBaseUrl}`,
};

export const STUDENTS_ENDPOINTS = {
    STUDENTS: `${studentsBaseUrl}`,
};

export const USERS_ENDPOINTS = {
    USERS: `${usersBaseUrl}`,
};

export const ORGANIZATIONS_ENDPOINTS = {
    ORGANIZATIONS: `${organizationsBaseUrl}`,
};

export const ORGANIZATION_ENDPOINTS = {
    ORGANIZATION: `${organizationBaseUrl}`,
};