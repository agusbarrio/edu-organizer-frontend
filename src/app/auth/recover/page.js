"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import RecoverPage from "components/pageContents/RecoverPage";

export default function AuthRecoverPage() {
  return (
    <ProtectedPage needUserSession={false}>
      <RecoverPage />
    </ProtectedPage>
  );
}
