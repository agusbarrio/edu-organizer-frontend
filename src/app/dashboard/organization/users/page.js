"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import OrganizationUsersPage from "components/pageContents/OrganizationUsersPage";
import USER_PERMISSIONS from "constants/USER_PERMISSIONS";

export default function DashboardOrganizationUsersPage() {
  return (
    <ProtectedPage
      needUserSession={true}
      userPermissionsAllowed={[USER_PERMISSIONS.ADMIN]}
    >
      <OrganizationUsersPage />
    </ProtectedPage>
  );
}
