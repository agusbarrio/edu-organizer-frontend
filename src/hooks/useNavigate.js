import { useRouter } from "next/router";
import { useCallback } from "react";
function useNavigate() {
    const router = useRouter();
    const go = useCallback((url, as, options) => {
        router.push(url, as, options)
    }, [router])

    return { go }
}

export default useNavigate;