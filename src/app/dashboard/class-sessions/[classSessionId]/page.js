"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import ClassSessionPage from "components/pageContents/ClassSessionPage";
import USER_PERMISSIONS from "constants/USER_PERMISSIONS";

export default function DashboardClassSessionPage() {
  return (
    <ProtectedPage
      needUserSession={true}
      userPermissionsAllowed={[USER_PERMISSIONS.ADMIN]}
    >
      <ClassSessionPage />
    </ProtectedPage>
  );
}
