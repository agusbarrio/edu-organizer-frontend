import { useCallback } from "react";

function useLocalStorage() {
    const setItem = useCallback((key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log('Error set item in localStorage');
        }
    }, [])

    const getItem = useCallback((key) => {
        try {
            const item = localStorage.getItem(key);
            return JSON.parse(item);
        } catch (error) {
            return undefined;
        }
    }, [])

    const clearItem = useCallback((key) => {
        localStorage.removeItem(key);
    }, [])

    return { setItem, getItem, clearItem }
}

export default useLocalStorage;