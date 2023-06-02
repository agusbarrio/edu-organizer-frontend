const PATHS = {
    HOME: '/',
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    MY_ACCOUNT: '/my-account',
    DASHBOARD: '/dashboard',
    COURSE: '/course',
    COURSE_NEW_CLASS: '/course/new-class',
    COURSE_NEW_STUDENT: '/course/new-student',
    COURSE_LOGIN: '/auth/course/{{shortId}}/login',
    RECOVER_PASSWORD: '/auth/recover',
    DASHBOARD_COURSES: '/dashboard/courses',
    DASHBOARD_COURSE: '/dashboard/courses/{{courseId}}',
    DASHBOARD_EDIT_COURSE: '/dashboard/courses/{{courseId}}/edit',
    DASHBOARD_STUDENTS: '/dashboard/students',
    DASHBOARD_STUDENT: '/dashboard/students/{{studentId}}',
    DASHBOARD_TEACHERS: '/dashboard/teachers',
    DASHBOARD_CLASS_SESSIONS: '/dashboard/class-sessions',
    DASHBOARD_COURSE_CREATE: '/dashboard/courses/create',
    DASHBOARD_STUDENT_CREATE: '/dashboard/students/create',
    NOT_FOUND: '/404',
    FORBIDDEN: '/403',
}

export default PATHS;