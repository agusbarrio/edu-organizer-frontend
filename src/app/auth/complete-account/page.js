"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import CompleteAccountPage from "components/pageContents/CompleteAccountPage";

export default function AuthCompleteAccountPage() {
  return (
    <ProtectedPage needUserSession={false}>
      <CompleteAccountPage />
    </ProtectedPage>
  );
}
