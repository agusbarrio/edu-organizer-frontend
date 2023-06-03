import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { COURSE_ACCESS_ENDPOINTS } from 'constants/ENDPOINTS';

function useGetCourseStudentsService() {
    const { get } = useDecoredFetch();
    const getCourseStudents = useCallback(
        async () => {
            const result = await get(
                `${COURSE_ACCESS_ENDPOINTS.COURSE}/students`,
                null,
                { showSuccessMessage: false },
            );
            return result;
        },
        [get]
    );
    return { getCourseStudents };
}

export default useGetCourseStudentsService;
