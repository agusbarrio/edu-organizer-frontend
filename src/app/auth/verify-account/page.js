"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import VerifyAccountPage from "components/pageContents/VerifyAccountPage";

export default function AuthVerifyAccountPage() {
  return (
    <ProtectedPage needUserSession={false}>
      <VerifyAccountPage />
    </ProtectedPage>
  );
}
