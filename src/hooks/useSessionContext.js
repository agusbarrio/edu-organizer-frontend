import { useContext } from "react";
import SessionContext from "../contexts/SessionContext";
function useSessionContext() {
    const { session, login, logout, setPermissions, loginPin, logoutPin } = useContext(SessionContext);
    return { session, login, logout, setPermissions, loginPin, logoutPin };
}

export default useSessionContext;