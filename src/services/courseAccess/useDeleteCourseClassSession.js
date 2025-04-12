import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { COURSE_ACCESS_ENDPOINTS } from 'constants/ENDPOINTS';

function useDeleteCourseClassSession() {
    const { del } = useDecoredFetch();
    const deleteCourseClassSession = useCallback(
        async (id) => {
            const result = await del(
                `${COURSE_ACCESS_ENDPOINTS.COURSE}/classSessions/${id}`
            );
            return result;
        },
        [del]
    );
    return { deleteCourseClassSession };
}

export default useDeleteCourseClassSession;
