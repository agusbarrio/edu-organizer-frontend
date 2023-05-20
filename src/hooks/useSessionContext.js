import { useContext, useMemo } from "react";
import SessionContext from "contexts/SessionContext";

function useSessionContext() {
    const { session, userLogin, userLogout, courseLogin, courseLogout, loading } = useContext(SessionContext);

    const user = useMemo(() => ({
        ...session?.user,
        logged: session?.user?.logged ?? false,
        permissions: session?.user?.permissions ?? [],
    }), [session])

    const course = useMemo(() => ({
        ...session?.course,
        logged: session?.course?.logged ?? false,
    }), [session])


    return {
        session,
        userLogin,
        userLogout,
        courseLogin,
        courseLogout,
        user,
        course,
        loading,
    }
}

export default useSessionContext;