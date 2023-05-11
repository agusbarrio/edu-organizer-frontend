import { useContext } from "react";
import SessionContext from "../contexts/SessionContext";
function useSessionContext() {
    const context = useContext(SessionContext);
    return { userSession: context?.userSession ?? null, courseSession: context?.courseSession ?? null }
}

export default useSessionContext;