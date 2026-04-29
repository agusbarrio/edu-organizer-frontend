"use client";

import ProtectedPage from "components/managers/ProtectedPage";
import TeacherCourseStudentsPage from "components/pageContents/TeacherCourseStudentsPage";
import USER_PERMISSIONS from "constants/USER_PERMISSIONS";

export default function TeacherCourseStudentsRoute() {
    return (
        <ProtectedPage
            needUserSession={true}
            userPermissionsAllowed={[USER_PERMISSIONS.TEACHER]}
        >
            <TeacherCourseStudentsPage />
        </ProtectedPage>
    );
}
