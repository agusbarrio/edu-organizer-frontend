const PATHS = {
    HOME: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    MY_ACCOUNT: '/my-account',
    DASHBOARD: '/dashboard/{{organizationShortId}}',
    LOGIN_COURSE: '/login-course',
    COURSE: '/course',
    RECOVER_PASSWORD: '/recover-password',
    DASHBOARD_COURSES: '/dashboard/{{organizationShortId}}/courses',
    DASHBOARD_COURSE: '/dashboard/{{organizationShortId}}/courses/:id',
    DASHBOARD_STUDENTS: '/dashboard/{{organizationShortId}}/students',
    DASHBOARD_TEACHERS: '/dashboard/{{organizationShortId}}/teachers',
    DASHBOARD_CLASS_SESSIONS: '/dashboard/{{organizationShortId}}/class-sessions',
}

export default PATHS;