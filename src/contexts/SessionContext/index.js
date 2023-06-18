import LOCAL_STORAGE from "constants/LOCAL_STORAGE";
import useLocalStorage from "hooks/useLocalStorage";
import { createContext, useCallback, useEffect, useReducer, useState, } from "react";
const SessionContext = createContext();

export default SessionContext;

const initialState = {
    user: {
        logged: false,
        permissions: [],
        organization: {},
    },
    course: {
        logged: false,
    }
}

export function SessionContextProvider({ children }) {

    const { setItem, getItem } = useLocalStorage();

    const reducer = useCallback((state, action) => {
        let result = {}
        switch (action.type) {
            case 'SET_SESSION':
                result = {
                    ...action.payload
                }
                break;
            case 'USER_LOGIN':
                result = {
                    ...state,
                    user: {
                        logged: true,
                        ...action.payload
                    }
                }
                break;
            case 'USER_LOGOUT':
                result = {
                    ...state,
                    user: {
                        logged: false,
                    }
                }
                break;
            case 'COURSE_LOGIN':
                result = {
                    ...state,
                    course: {
                        logged: true,
                        lastCourseLoggedShortId: action?.payload?.shortId,
                        ...action.payload
                    }
                }
                break;
            case 'COURSE_LOGOUT':
                result = {
                    ...state,
                    course: {
                        logged: false,
                        lastCourseLoggedShortId: state?.course?.lastCourseLoggedShortId,
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


    const userLogin = useCallback((user) => {
        dispatch({
            type: 'USER_LOGIN',
            payload: user
        })
    }, [dispatch])

    const userLogout = useCallback(() => {
        dispatch({
            type: 'USER_LOGOUT',
        })
    }, [dispatch])

    const courseLogin = useCallback((course) => {
        dispatch({
            type: 'COURSE_LOGIN',
            payload: course
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

