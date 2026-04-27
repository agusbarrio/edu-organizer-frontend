"use client";

import { Suspense } from "react";
import GlobalContextManager from "components/managers/GlobalContextManager";

export default function AppProviders({ children }) {
  return (
    <GlobalContextManager>
      <Suspense fallback={null}>{children}</Suspense>
    </GlobalContextManager>
  );
}
