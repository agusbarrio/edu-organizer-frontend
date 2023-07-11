import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { COURSES_ENDPOINTS } from 'constants/ENDPOINTS';

function useDeleteCourseService() {
    const { del } = useDecoredFetch();
    const deleteCourse = useCallback(
        async (_id) => {
            const result = await del(
                `${COURSES_ENDPOINTS.COURSES}/${_id}`
            );
            return result;
        },
        [del]
    );
    return { deleteCourse };
}

export default useDeleteCourseService;
