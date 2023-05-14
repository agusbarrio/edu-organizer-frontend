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
    DASHBOARD_COURSE: '/dashboard/{{organizationShortId}}/courses/{{courseId}}',
    DASHBOARD_STUDENTS: '/dashboard/{{organizationShortId}}/students',
    DASHBOARD_STUDENT: '/dashboard/{{organizationShortId}}/students/{{studentId}}',
    DASHBOARD_TEACHERS: '/dashboard/{{organizationShortId}}/teachers',
    DASHBOARD_CLASS_SESSIONS: '/dashboard/{{organizationShortId}}/class-sessions',
    DASHBOARD_COURSE_CREATE: '/dashboard/{{organizationShortId}}/courses/create',
    DASHBOARD_STUDENT_CREATE: '/dashboard/{{organizationShortId}}/students/create',
}

export default PATHS;