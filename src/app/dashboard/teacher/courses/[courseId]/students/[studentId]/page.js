"use client";

import ProtectedPage from "components/managers/ProtectedPage";
import TeacherCourseStudentPage from "components/pageContents/TeacherCourseStudentPage";
import USER_PERMISSIONS from "constants/USER_PERMISSIONS";

export default function TeacherCourseStudentRoute() {
    return (
        <ProtectedPage
            needUserSession={true}
            userPermissionsAllowed={[USER_PERMISSIONS.TEACHER]}
        >
            <TeacherCourseStudentPage />
        </ProtectedPage>
    );
}
