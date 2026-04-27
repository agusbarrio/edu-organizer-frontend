"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import OrganizationsPage from "components/pageContents/OrganizationsPage";
import USER_PERMISSIONS from "constants/USER_PERMISSIONS";

export default function DashboardOrganizationsPage() {
  return (
    <ProtectedPage
      needUserSession={true}
      userPermissionsAllowed={[USER_PERMISSIONS.SUPERADMIN]}
    >
      <OrganizationsPage />
    </ProtectedPage>
  );
}
