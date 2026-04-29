"use client";

import ProtectedPage from "components/managers/ProtectedPage";
import TeacherCourseNewClassPage from "components/pageContents/TeacherCourseNewClassPage";
import USER_PERMISSIONS from "constants/USER_PERMISSIONS";

export default function TeacherCourseNewClassRoute() {
    return (
        <ProtectedPage
            needUserSession={true}
            userPermissionsAllowed={[USER_PERMISSIONS.TEACHER]}
        >
            <TeacherCourseNewClassPage />
        </ProtectedPage>
    );
}
