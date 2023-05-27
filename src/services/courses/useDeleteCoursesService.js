import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { COURSES_ENDPOINTS } from 'constants/ENDPOINTS';

function useDeleteCoursesService() {
    const { del } = useDecoredFetch();
    const deleteCourses = useCallback(
        async (ids) => {
            const result = await del(
                COURSES_ENDPOINTS.COURSES,
                { data: { ids } }
            );
            return result;
        },
        [del]
    );
    return { deleteCourses };
}

export default useDeleteCoursesService;
