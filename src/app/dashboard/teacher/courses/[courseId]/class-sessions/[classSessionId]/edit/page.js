"use client";

import ProtectedPage from "components/managers/ProtectedPage";
import TeacherCourseEditClassSessionPage from "components/pageContents/TeacherCourseEditClassSessionPage";
import USER_PERMISSIONS from "constants/USER_PERMISSIONS";

export default function TeacherCourseEditClassSessionRoute() {
    return (
        <ProtectedPage
            needUserSession={true}
            userPermissionsAllowed={[USER_PERMISSIONS.TEACHER]}
        >
            <TeacherCourseEditClassSessionPage />
        </ProtectedPage>
    );
}
