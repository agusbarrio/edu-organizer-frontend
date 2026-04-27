"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import ResetPasswordPage from "components/pageContents/ResetPasswordPage";

export default function AuthResetPasswordPage() {
  return (
    <ProtectedPage needUserSession={false}>
      <ResetPasswordPage />
    </ProtectedPage>
  );
}
