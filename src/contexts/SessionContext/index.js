'use client';
import LOCAL_STORAGE from "constants/LOCAL_STORAGE";
import { get, set } from "utils/localStorage";
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
    SET_SESSION: 'SET_SESSION',
};

function reducer(state, action) {
    const { type, payload } = action;
    let newState
    if (type === ACTIONS.SET_SESSION) {
        newState = {
            ...payload
        };
    }
    if (type === ACTIONS.LOGIN) {
        newState = {
            ...state,
            loggedIn: true,
            userPermissions: payload?.userPermissions ?? [],
        };
    }
    if (type === ACTIONS.LOGOUT) {
        newState = {
            ...state,
            loggedIn: false,
            userPermissions: [],
        };
    }
    if (type === ACTIONS.SET_PERMISSIONS) {
        newState = {
            ...state,
            userPermissions: payload?.userPermissions ?? [],
        };
    }
    if (type === ACTIONS.LOGIN_PIN) {
        newState = {
            ...state,
            loggedInWithPin: true,
        };
    }
    if (type === ACTIONS.LOGOUT_PIN) {
        newState = {
            ...state,
            loggedInWithPin: false,
        };
    }
    if (newState) {
        set(LOCAL_STORAGE.SESSION, newState)
        return newState
    }
    throw Error('Unknown action.');
}

export function SessionContextProvider({ children }) {
    const [session, dispatch] = useReducer(reducer, get(LOCAL_STORAGE.SESSION) ?? initialState);
    const { loggedIn, loggedInWithPin, userPermissions } = session

    const login = (payload) => dispatch({ type: ACTIONS.LOGIN, payload });
    const logout = () => dispatch({ type: ACTIONS.LOGOUT });
    const setPermissions = (payload) => dispatch({ type: ACTIONS.SET_PERMISSIONS, payload });
    const loginPin = () => dispatch({ type: ACTIONS.LOGIN_PIN });
    const logoutPin = () => dispatch({ type: ACTIONS.LOGOUT_PIN });

    return (
        <SessionContext.Provider value={{ session, login, logout, setPermissions, loginPin, logoutPin, loggedIn, loggedInWithPin, userPermissions }}>
            {children}
        </SessionContext.Provider>
    );
}

