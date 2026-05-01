import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import PublicTemplate from "components/templates/PublicTemplate";
import PATHS from "constants/PATHS";
import { AUTH_ENDPOINTS } from "constants/ENDPOINTS";
import useSessionContext from "hooks/useSessionContext";

function parseAccessTokenFromHash() {
    if (typeof window === "undefined") return null;
    const m = window.location.hash.match(/access_token=([^&]+)/);
    return m ? decodeURIComponent(m[1]) : null;
}

function OAuthSuccessPage() {
    const { userLogin } = useSessionContext();
    const router = useRouter();

    useEffect(() => {
        const token = parseAccessTokenFromHash();
        if (!token) {
            router.replace(
              `${PATHS.LOGIN}?error=oauth_unauthorized`
            );
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
                    router.replace(
              `${PATHS.LOGIN}?error=oauth_unauthorized`
            );
                }
            }
        })();
        return () => {
            cancelled = true;
        };
    }, [router, userLogin]);

    return <PublicTemplate loading />;
}

export default OAuthSuccessPage;
