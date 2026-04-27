"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import CreateStudentPage from "components/pageContents/CreateStudentPage";
import USER_PERMISSIONS from "constants/USER_PERMISSIONS";

export default function DashboardCreateStudentPage() {
  return (
    <ProtectedPage
      needUserSession={true}
      userPermissionsAllowed={[USER_PERMISSIONS.ADMIN]}
    >
      <CreateStudentPage />
    </ProtectedPage>
  );
}
