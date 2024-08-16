import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { COURSES_ENDPOINTS } from 'constants/ENDPOINTS';

function useGetCourseService() {
    const { get } = useDecoredFetch();
    const getCourse = useCallback(
        async (id) => {
            const result = await get(
                `${COURSES_ENDPOINTS.COURSES}/${id}`,
                null,
                { showSuccessMessage: false },
            );
            return result;
        },
        [get]
    );

    const getCourseXlsx = useCallback(
        async (id) => {
            const result = await get(
                `${COURSES_ENDPOINTS.COURSES}/${id}/xlsx`,
                { responseType: 'blob', },
                { showSuccessMessage: false },
            );
            return result;
        },
        [get]
    );
    return { getCourse, getCourseXlsx };
}

export default useGetCourseService;
