import { useContext } from "react";
import SessionContext from "../contexts/SessionContext";
function useSessionContext() {
    const context = useContext(SessionContext);
    return {
        user: context?.user ?? null,
        course: context?.course ?? null,
        organization: context?.organization ?? null
    }
}

export default useSessionContext;