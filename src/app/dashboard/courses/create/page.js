"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import CreateCoursePage from "components/pageContents/CreateCoursePage";
import USER_PERMISSIONS from "constants/USER_PERMISSIONS";

export default function DashboardCreateCoursePage() {
  return (
    <ProtectedPage
      needUserSession={true}
      userPermissionsAllowed={[USER_PERMISSIONS.ADMIN]}
    >
      <CreateCoursePage />
    </ProtectedPage>
  );
}
