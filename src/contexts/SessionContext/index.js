import LOCAL_STORAGE from "constants/LOCAL_STORAGE";
import useLocalStorage from "hooks/useLocalStorage";
import { createContext, useCallback, useEffect, useReducer, useState, } from "react";
const SessionContext = createContext();

export default SessionContext;

const initialState = {
    userSession: {
        user: null,
        token: null,
    },
    courseSession: {
        course: null,
        token: null,
    }
}

export function SessionContextProvider({ children }) {

    const { setItem, getItem } = useLocalStorage();

    const reducer = useCallback((state, action) => {
        let result = {}
        switch (action.type) {
            case 'SET_SESSION':
                result = action.payload
                break;
            case 'USER_LOGIN':
                result = {
                    ...state,
                    userSession: {
                        user: action.payload.user,
                        token: action.payload.token,
                    }
                }
                break;
            case 'USER_LOGOUT':
                result = {
                    ...state,
                    userSession: {
                        user: null,
                        token: null,
                    }
                }
                break;
            case 'COURSE_LOGIN':
                result = {
                    ...state,
                    courseSession: {
                        course: action?.payload?.course,
                        lastCourseLoggedShortId: action?.payload?.course?.shortId,
                        token: action?.payload?.token,
                    }
                }
                break;
            case 'COURSE_LOGOUT':
                result = {
                    ...state,
                    courseSession: {
                        course: null,
                        lastCourseLoggedShortId: state?.courseSession?.lastCourseLoggedShortId,
                        token: null,
                    }
                }
                break;
            default:
                result = state
                break;
        }
        setItem(LOCAL_STORAGE.SESSION, result)
        return result
    }, [setItem])

    const [session, dispatch] = useReducer(reducer, initialState);


    const userLogin = useCallback((data) => {
        dispatch({
            type: 'USER_LOGIN',
            payload: data
        })
    }, [dispatch])

    const userLogout = useCallback(() => {
        dispatch({
            type: 'USER_LOGOUT',
        })
    }, [dispatch])

    const courseLogin = useCallback((data) => {
        dispatch({
            type: 'COURSE_LOGIN',
            payload: data
        })
    }, [dispatch])

    const courseLogout = useCallback(() => {
        dispatch({
            type: 'COURSE_LOGOUT',
        })
    }, [dispatch])

    const setSession = useCallback((session) => {
        dispatch({
            type: 'SET_SESSION',
            payload: session
        })
    }, [dispatch])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const session = getItem(LOCAL_STORAGE.SESSION)
        if (session) {
            dispatch({
                type: 'SET_SESSION',
                payload: session
            })
        }
        setLoading(false)
    }, [getItem])

    return (
        <SessionContext.Provider value={{ session, userLogin, userLogout, courseLogin, courseLogout, setSession, loading }}>
            {children}
        </SessionContext.Provider>
    );
}

