"use client";

import ProtectedPage from "components/managers/ProtectedPage";
import TeacherCourseNewStudentPage from "components/pageContents/TeacherCourseNewStudentPage";
import USER_PERMISSIONS from "constants/USER_PERMISSIONS";

export default function TeacherCourseNewStudentRoute() {
    return (
        <ProtectedPage
            needUserSession={true}
            userPermissionsAllowed={[USER_PERMISSIONS.TEACHER]}
        >
            <TeacherCourseNewStudentPage />
        </ProtectedPage>
    );
}
