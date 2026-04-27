"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import TeachersPage from "components/pageContents/TeachersPage";
import USER_PERMISSIONS from "constants/USER_PERMISSIONS";

export default function DashboardTeachersPage() {
  return (
    <ProtectedPage
      needUserSession={true}
      userPermissionsAllowed={[USER_PERMISSIONS.ADMIN]}
    >
      <TeachersPage />
    </ProtectedPage>
  );
}
