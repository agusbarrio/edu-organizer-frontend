"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import ClassSessionsPage from "components/pageContents/ClassSessionsPage";
import USER_PERMISSIONS from "constants/USER_PERMISSIONS";

export default function DashboardClassSessionsPage() {
  return (
    <ProtectedPage
      needUserSession={true}
      userPermissionsAllowed={[USER_PERMISSIONS.ADMIN]}
    >
      <ClassSessionsPage />
    </ProtectedPage>
  );
}
