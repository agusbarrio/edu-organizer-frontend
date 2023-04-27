import { createContext, useReducer } from "react";

const SessionContext = createContext();

export default SessionContext;

const initialState = {
    loggedIn: false,
    loggedInWithPin: false,
    userPermissions: [],
};

const ACTIONS = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    LOGIN_PIN: 'LOGIN_PIN',
    LOGOUT_PIN: 'LOGOUT_PIN',
    SET_PERMISSIONS: 'SET_PERMISSIONS',
};

function reducer(state, action) {
    const { type, payload } = action;
    if (type === ACTIONS.LOGIN) {
        return {
            loggedIn: true,
            userPermissions: payload?.userPermissions ?? [],
        };
    }
    if (type === ACTIONS.LOGOUT) {
        return {
            loggedIn: false,
            userPermissions: [],
        };
    }
    if (type === ACTIONS.SET_PERMISSIONS) {
        return {
            ...state,
            userPermissions: payload?.userPermissions ?? [],
        };
    }
    if (type === ACTIONS.LOGIN_PIN) {
        return {
            ...state,
            loggedInWithPin: true,
        };
    }
    if (type === ACTIONS.LOGOUT_PIN) {
        return {
            ...state,
            loggedInWithPin: false,
        };
    }
    throw Error('Unknown action.');
}

export function SessionContextProvider({ children }) {
    const [session, dispatch] = useReducer(reducer, initialState);

    const login = (payload) => dispatch({ type: ACTIONS.LOGIN, payload });
    const logout = () => dispatch({ type: ACTIONS.LOGOUT });
    const setPermissions = (payload) => dispatch({ type: ACTIONS.SET_PERMISSIONS, payload });
    const loginPin = () => dispatch({ type: ACTIONS.LOGIN_PIN });
    const logoutPin = () => dispatch({ type: ACTIONS.LOGOUT_PIN });

    return (
        <SessionContext.Provider value={{ session, login, logout, setPermissions, loginPin, logoutPin }}>
            {children}
        </SessionContext.Provider>
    );
}

