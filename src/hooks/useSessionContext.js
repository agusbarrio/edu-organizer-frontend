import { useContext, useMemo } from "react";
import SessionContext from "contexts/SessionContext";

function useSessionContext() {
    const { session, userLogin, userLogout, courseLogin, courseLogout, loading } = useContext(SessionContext);

    const userSession = useMemo(() => ({
        ...session?.userSession,
        user: {
            ...session?.userSession?.user,
            permissions: session?.userSession?.user?.permissions ?? [],
        },
        token: session?.userSession?.token ?? null,
    }), [session])

    const courseSession = useMemo(() => ({
        course: session?.courseSession?.course ?? null,
        lastCourseLoggedShortId: session?.courseSession?.lastCourseLoggedShortId ?? null,
        token: session?.courseSession?.token ?? null,
    }), [session])


    return {
        session,
        userLogin,
        userLogout,
        courseLogin,
        courseLogout,
        userSession,
        courseSession,
        loading,
    }
}

export default useSessionContext;