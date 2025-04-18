const PATHS = {
    HOME: '/',
    AUTH_REDIRECT: '/auth/redirect',
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    MY_ACCOUNT: '/my-account',
    EDIT_MY_ACCOUNT: '/my-account/edit',
    DASHBOARD: '/dashboard',
    COURSE: '/course',
    COURSE_NEW_CLASS: '/course/new-class',
    COURSE_NEW_STUDENT: '/course/new-student',
    COURSE_CLASS_SESSIONS: '/course/class-sessions',
    COURSE_CLASS_SESSION: '/course/class-sessions/{{classSessionId}}',
    COURSE_CLASS_SESSION_EDIT: '/course/class-sessions/{{classSessionId}}/edit',
    COURSE_LOGIN: '/auth/course/{{shortId}}/login',
    RECOVER_PASSWORD: '/auth/recover',
    DASHBOARD_COURSES: '/dashboard/courses',
    DASHBOARD_COURSE: '/dashboard/courses/{{courseId}}',
    DASHBOARD_EDIT_COURSE: '/dashboard/courses/{{courseId}}/edit',
    DASHBOARD_STUDENTS: '/dashboard/students',
    DASHBOARD_STUDENT: '/dashboard/students/{{studentId}}',
    DASHBOARD_TEACHERS: '/dashboard/teachers',
    DASHBOARD_CLASS_SESSIONS: '/dashboard/class-sessions',
    DASHBOARD_CLASS_SESSION: '/dashboard/class-sessions/{{classSessionId}}',
    DASHBOARD_EDIT_CLASS_SESSION: '/dashboard/class-sessions/{{classSessionId}}/edit',
    DASHBOARD_COURSE_CREATE: '/dashboard/courses/create',
    DASHBOARD_STUDENT_CREATE: '/dashboard/students/create',
    DASHBOARD_EDIT_STUDENT: '/dashboard/students/{{studentId}}/edit',
    DASHBOARD_USERS: '/dashboard/users',
    DASHBOARD_ORGANIZATIONS: '/dashboard/organizations',
    DASHBOARD_MY_ORGANIZATION: '/dashboard/organization',
    EDIT_ORGANIZATION: '/dashboard/organization/edit',
    NOT_FOUND: '/404',
    FORBIDDEN: '/403',
    DASHBOARD_CONTROLS: '/dashboard/controls',

}

export default PATHS;