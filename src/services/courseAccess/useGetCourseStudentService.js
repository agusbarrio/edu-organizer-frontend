import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { COURSE_ACCESS_ENDPOINTS } from 'constants/ENDPOINTS';

function useGetCourseStudentService() {
    const { get } = useDecoredFetch();
    const getCourseStudent = useCallback(
        async (studentId) => {
            const result = await get(
                `${COURSE_ACCESS_ENDPOINTS.COURSE}/students/${studentId}`,
                null,
                { showSuccessMessage: false },
            );
            return result;
        },
        [get]
    );
    return { getCourseStudent };
}

export default useGetCourseStudentService;
