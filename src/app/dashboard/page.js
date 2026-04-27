"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import DashboardPage from "components/pageContents/DashboardPage";

export default function DashboardRoute() {
  return (
    <ProtectedPage needUserSession={true}>
      <DashboardPage />
    </ProtectedPage>
  );
}
