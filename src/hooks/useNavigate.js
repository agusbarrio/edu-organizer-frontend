import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
function useNavigate() {
    const router = useRouter();
    const go = useCallback((url, as, options) => {
        router.push(url, as, options)
    }, [router])

    const goBack = useCallback(() => {
        router.back()
    }, [router])

    const params = useMemo(() => {
        return router.query
    }, [router.query])

    return { go, params, goBack }
}

export default useNavigate;