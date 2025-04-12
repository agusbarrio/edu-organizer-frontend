import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { COURSE_ACCESS_ENDPOINTS } from 'constants/ENDPOINTS';

function useGetClassSessionCourse() {
    const { get } = useDecoredFetch();
    const getClassSessionCourse = useCallback(
        async (id) => {
            const result = await get(
                `${COURSE_ACCESS_ENDPOINTS.COURSE}/classSessions/${id}`,
                null,
                { showSuccessMessage: false },
            );
            return result;
        },
        [get]
    );
    return { getClassSessionCourse };
}

export default useGetClassSessionCourse;
