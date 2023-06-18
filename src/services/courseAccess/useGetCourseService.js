import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { COURSE_ACCESS_ENDPOINTS } from 'constants/ENDPOINTS';

function useGetCourseService() {
    const { get } = useDecoredFetch();
    const getCourse = useCallback(
        async () => {
            const result = await get(
                COURSE_ACCESS_ENDPOINTS.COURSE,
                null,
                { showSuccessMessage: false },
            );
            return result;
        },
        [get]
    );
    return { getCourse };
}

export default useGetCourseService;
