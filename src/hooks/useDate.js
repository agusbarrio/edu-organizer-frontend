import moment from "moment";
import { useCallback } from "react";

function useDate() {

    const getNow = useCallback(() => moment(), []);
    const getTimeAgo = useCallback((amount, unit) => moment().subtract(amount, unit), []);
    const getDayAgo = useCallback(() => getTimeAgo(1, 'days'), [getTimeAgo]);
    const getFortnightAgo = useCallback(() => getTimeAgo(15, 'days'), [getTimeAgo]);
    const getWeekAgo = useCallback(() => getTimeAgo(7, 'days'), [getTimeAgo]);
    const getMonthAgo = useCallback(() => getTimeAgo(1, 'months'), [getTimeAgo]);
    const getYearAgo = useCallback(() => getTimeAgo(1, 'years'), [getTimeAgo]);

    return {
        getNow,
        getTimeAgo,
        getDayAgo,
        getFortnightAgo,
        getWeekAgo,
        getMonthAgo,
        getYearAgo
    }
}

export default useDate