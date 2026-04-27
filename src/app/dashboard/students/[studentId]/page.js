"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import StudentPage from "components/pageContents/StudentPage";
import USER_PERMISSIONS from "constants/USER_PERMISSIONS";

export default function DashboardStudentPage() {
  return (
    <ProtectedPage
      needUserSession={true}
      userPermissionsAllowed={[USER_PERMISSIONS.ADMIN]}
    >
      <StudentPage />
    </ProtectedPage>
  );
}
