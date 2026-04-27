"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import EditMyAccountPage from "components/pageContents/EditMyAccountPage";

export default function MyAccountEditRoute() {
  return (
    <ProtectedPage needUserSession={true}>
      <EditMyAccountPage />
    </ProtectedPage>
  );
}
