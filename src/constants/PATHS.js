const PATHS = {
    HOME: '/',
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    MY_ACCOUNT: '/my-account',
    DASHBOARD: '/dashboard',
    LOGIN_COURSE: '/login-course',
    COURSE: '/course',
    RECOVER_PASSWORD: '/recover-password',
    DASHBOARD_COURSES: '/dashboard/courses',
    DASHBOARD_COURSE: '/dashboard/courses/{{courseId}}',
    DASHBOARD_STUDENTS: '/dashboard/students',
    DASHBOARD_STUDENT: '/dashboard/students/{{studentId}}',
    DASHBOARD_TEACHERS: '/dashboard/teachers',
    DASHBOARD_CLASS_SESSIONS: '/dashboard/class-sessions',
    DASHBOARD_COURSE_CREATE: '/dashboard/courses/create',
    DASHBOARD_STUDENT_CREATE: '/dashboard/students/create',
}

export default PATHS;