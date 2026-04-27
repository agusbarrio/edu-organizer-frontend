"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import CourseDetailsPage from "components/pageContents/CourseDetailsPage";
import USER_PERMISSIONS from "constants/USER_PERMISSIONS";

export default function DashboardCourseDetailsPage() {
  return (
    <ProtectedPage
      needUserSession={true}
      userPermissionsAllowed={[USER_PERMISSIONS.ADMIN]}
    >
      <CourseDetailsPage />
    </ProtectedPage>
  );
}
