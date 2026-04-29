"use client";

import ProtectedPage from "components/managers/ProtectedPage";
import TeacherCourseClassSessionsPage from "components/pageContents/TeacherCourseClassSessionsPage";
import USER_PERMISSIONS from "constants/USER_PERMISSIONS";

export default function TeacherCourseClassSessionsRoute() {
    return (
        <ProtectedPage
            needUserSession={true}
            userPermissionsAllowed={[USER_PERMISSIONS.TEACHER]}
        >
            <TeacherCourseClassSessionsPage />
        </ProtectedPage>
    );
}
