"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import EditMyOrganizationPage from "components/pageContents/EditMyOrganizationPage";
import USER_PERMISSIONS from "constants/USER_PERMISSIONS";

export default function DashboardEditOrganizationPage() {
  return (
    <ProtectedPage
      needUserSession={true}
      userPermissionsAllowed={[USER_PERMISSIONS.ADMIN]}
    >
      <EditMyOrganizationPage />
    </ProtectedPage>
  );
}
