"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import EditCoursePage from "components/pageContents/EditCoursePage";
import USER_PERMISSIONS from "constants/USER_PERMISSIONS";

export default function DashboardEditCoursePage() {
  return (
    <ProtectedPage
      needUserSession={true}
      userPermissionsAllowed={[USER_PERMISSIONS.ADMIN]}
    >
      <EditCoursePage />
    </ProtectedPage>
  );
}
