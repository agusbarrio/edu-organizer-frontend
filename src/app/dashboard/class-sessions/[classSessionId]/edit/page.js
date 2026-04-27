"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import EditClassSessionPage from "components/pageContents/EditClassSessionPage";
import USER_PERMISSIONS from "constants/USER_PERMISSIONS";

export default function DashboardEditClassSessionPage() {
  return (
    <ProtectedPage
      needUserSession={true}
      userPermissionsAllowed={[USER_PERMISSIONS.ADMIN]}
    >
      <EditClassSessionPage />
    </ProtectedPage>
  );
}
