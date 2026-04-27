"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import CoursesPage from "components/pageContents/CoursesPage";
import USER_PERMISSIONS from "constants/USER_PERMISSIONS";

export default function DashboardCoursesPage() {
  return (
    <ProtectedPage
      needUserSession={true}
      userPermissionsAllowed={[USER_PERMISSIONS.ADMIN]}
    >
      <CoursesPage />
    </ProtectedPage>
  );
}
