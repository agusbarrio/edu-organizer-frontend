import { createContext, useMemo, } from "react";
const SessionContext = createContext();

export default SessionContext;

export function SessionContextProvider({ children, sessionData }) {
    const { userSession, courseSession } = useMemo(() => ({
        userSession: sessionData?.userSession ?? null,
        courseSession: sessionData?.courseSession ?? null,
    }), [sessionData?.userSession, sessionData?.courseSession]);

    return (
        <SessionContext.Provider value={{ userSession, courseSession }}>
            {children}
        </SessionContext.Provider>
    );
}

