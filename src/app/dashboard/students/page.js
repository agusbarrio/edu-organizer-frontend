"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import StudentsPage from "components/pageContents/StudentsPage";
import USER_PERMISSIONS from "constants/USER_PERMISSIONS";

export default function DashboardStudentsPage() {
  return (
    <ProtectedPage
      needUserSession={true}
      userPermissionsAllowed={[USER_PERMISSIONS.ADMIN]}
    >
      <StudentsPage />
    </ProtectedPage>
  );
}
