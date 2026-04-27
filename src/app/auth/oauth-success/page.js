"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import OAuthSuccessPage from "components/pageContents/OAuthSuccessPage";

export default function AuthOauthSuccessPage() {
  return (
    <ProtectedPage needUserSession={false}>
      <OAuthSuccessPage />
    </ProtectedPage>
  );
}
