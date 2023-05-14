import { createContext, useMemo, } from "react";
const SessionContext = createContext();

export default SessionContext;

export function SessionContextProvider({ children, sessionData }) {

    const { user, course, organization } = useMemo(() => ({
        user: sessionData?.user ?? null,
        course: sessionData?.course ?? null,
        organization: sessionData?.organization ?? null
    }), [sessionData])

    return (
        <SessionContext.Provider value={{ user, course, organization }}>
            {children}
        </SessionContext.Provider>
    );
}

