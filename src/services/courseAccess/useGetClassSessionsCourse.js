import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { COURSE_ACCESS_ENDPOINTS } from 'constants/ENDPOINTS';

function useGetClassSessionsCourse() {
    const { get } = useDecoredFetch();
    const getClassSessionsCourse = useCallback(
        async () => {
            const result = await get(
                `${COURSE_ACCESS_ENDPOINTS.COURSE}/classSessions`,
                null,
                { showSuccessMessage: false },
            );
            return result;
        },
        [get]
    );
    return { getClassSessionsCourse };
}

export default useGetClassSessionsCourse;
