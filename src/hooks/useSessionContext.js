import { useContext } from "react";
import SessionContext from "../contexts/SessionContext";
function useSessionContext() {
    const { session, login, logout, setPermissions, loginPin, logoutPin, loggedIn, loggedInWithPin, userPermissions } = useContext(SessionContext);
    return { session, login, logout, setPermissions, loginPin, logoutPin, loggedIn, loggedInWithPin, userPermissions };
}

export default useSessionContext;