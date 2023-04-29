import URLS from "./urls";
const authBaseUrl = `${URLS.API_BASE_URL}/auth`;

export const AUTH_ENDPOINTS = {
    LOGIN: `${authBaseUrl}/login`,
    REGISTER: `${authBaseUrl}/register`,
    LOGOUT: `${authBaseUrl}/logout`,
    REQUEST_PASSWORD_RECOVERY: `${authBaseUrl}/requestPasswordRecovery`,
    RESET_PASSWORD: `${authBaseUrl}/resetPassword`,
};

