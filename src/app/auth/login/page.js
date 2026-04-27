"use client";

import { Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";
import LoadingBox from "components/dataDisplay/LoadingBox";
import LoginPage from "components/pageContents/LoginPage";
import PATHS from "constants/PATHS";
import useSessionContext from "hooks/useSessionContext";

function AuthLoginGate() {
  const { userSession, loading } = useSessionContext();
  const router = useRouter();

  useEffect(() => {
    if (!loading && userSession?.token) {
      router.replace(PATHS.DASHBOARD);
    }
  }, [loading, userSession?.token, router]);

  if (loading) {
    return (
      <Box sx={{ width: "100vw", height: "100dvh" }}>
        <LoadingBox />
      </Box>
    );
  }
  if (userSession?.token) {
    return null;
  }

  return (
    <Suspense
      fallback={
        <Box sx={{ width: "100vw", height: "100dvh" }}>
          <LoadingBox />
        </Box>
      }
    >
      <LoginPage />
    </Suspense>
  );
}

export default function AuthLoginPage() {
  return <AuthLoginGate />;
}
