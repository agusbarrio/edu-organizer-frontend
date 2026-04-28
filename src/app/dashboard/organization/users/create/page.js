"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import CreateOrganizationUserPage from "components/pageContents/CreateOrganizationUserPage";
import USER_PERMISSIONS from "constants/USER_PERMISSIONS";

export default function DashboardOrganizationUsersCreatePage() {
  return (
    <ProtectedPage
      needUserSession={true}
      userPermissionsAllowed={[USER_PERMISSIONS.ADMIN]}
    >
      <CreateOrganizationUserPage />
    </ProtectedPage>
  );
}
