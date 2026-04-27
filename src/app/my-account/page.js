"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import MyAccountPage from "components/pageContents/MyAccountPage";

export default function MyAccountRoute() {
  return (
    <ProtectedPage needUserSession={true}>
      <MyAccountPage />
    </ProtectedPage>
  );
}
