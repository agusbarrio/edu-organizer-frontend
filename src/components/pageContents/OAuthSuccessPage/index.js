import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Stack, Typography } from "@mui/material";
import PublicTemplate from "components/templates/PublicTemplate";
import PATHS from "constants/PATHS";
import TEXTS from "constants/TEXTS";
import { AUTH_ENDPOINTS } from "constants/ENDPOINTS";
import useLocaleContext from "hooks/useLocaleContext";
import useSessionContext from "hooks/useSessionContext";

function parseAccessTokenFromHash() {
    if (typeof window === "undefined") return null;
    const m = window.location.hash.match(/access_token=([^&]+)/);
    return m ? decodeURIComponent(m[1]) : null;
}

function OAuthSuccessPage() {
    const { translate } = useLocaleContext();
    const { userLogin } = useSessionContext();
    const router = useRouter();

    useEffect(() => {
        const token = parseAccessTokenFromHash();
        if (!token) {
            router.replace(`${PATHS.LOGIN}?error=oauth_unauthorized`);
            return;
        }
        let cancelled = false;
        (async () => {
            try {
                const { data } = await axios.get(AUTH_ENDPOINTS.OAUTH_SESSION, {
                    headers: { "user-authorization": `Bearer ${token}` },
                    withCredentials: true,
                });
                if (cancelled) return;
                userLogin({
                    token: data.token,
                    user: {
                        ...data.user,
                        permissions: data.user.permissions.map(({ permission }) => permission),
                    },
                });
                window.history.replaceState(null, "", window.location.pathname);
                router.replace(PATHS.DASHBOARD);
            } catch {
                if (!cancelled) {
                    router.replace(`${PATHS.LOGIN}?error=oauth_unauthorized`);
                }
            }
        })();
        return () => {
            cancelled = true;
        };
    }, [router, userLogin]);

    return (
        <PublicTemplate title={translate(TEXTS.OAUTH_SUCCESS_PAGE_TITLE)}>
            <Stack spacing={2} alignItems="center" width="100%">
                <Typography color="text.secondary">{translate(TEXTS.OAUTH_SUCCESS_PAGE_PENDING)}</Typography>
            </Stack>
        </PublicTemplate>
    );
}

export default OAuthSuccessPage;
