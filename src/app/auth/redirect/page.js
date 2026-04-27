"use client"

import Redirect from "components/navigation/Redirect";
import PATHS from "constants/PATHS";

export default function AuthRedirectPage() {
  return <Redirect url={PATHS.LOGIN} />;
}
