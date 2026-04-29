"use client";

import ProtectedPage from "components/managers/ProtectedPage";
import TeacherCourseEditStudentPage from "components/pageContents/TeacherCourseEditStudentPage";
import USER_PERMISSIONS from "constants/USER_PERMISSIONS";

export default function TeacherCourseEditStudentRoute() {
    return (
        <ProtectedPage
            needUserSession={true}
            userPermissionsAllowed={[USER_PERMISSIONS.TEACHER]}
        >
            <TeacherCourseEditStudentPage />
        </ProtectedPage>
    );
}
