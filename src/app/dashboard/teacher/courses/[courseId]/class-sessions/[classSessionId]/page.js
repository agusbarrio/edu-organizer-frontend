"use client";

import ProtectedPage from "components/managers/ProtectedPage";
import TeacherCourseClassSessionPage from "components/pageContents/TeacherCourseClassSessionPage";
import USER_PERMISSIONS from "constants/USER_PERMISSIONS";

export default function TeacherCourseClassSessionRoute() {
    return (
        <ProtectedPage
            needUserSession={true}
            userPermissionsAllowed={[USER_PERMISSIONS.TEACHER]}
        >
            <TeacherCourseClassSessionPage />
        </ProtectedPage>
    );
}
