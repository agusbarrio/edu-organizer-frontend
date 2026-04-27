"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import ControlsPage from "components/pageContents/ControlsPage";
import USER_PERMISSIONS from "constants/USER_PERMISSIONS";

export default function DashboardControlsPage() {
  return (
    <ProtectedPage
      needUserSession={true}
      userPermissionsAllowed={[USER_PERMISSIONS.SUPERADMIN]}
    >
      <ControlsPage />
    </ProtectedPage>
  );
}
