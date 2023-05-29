import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { COURSES_ENDPOINTS } from 'constants/ENDPOINTS';

function useEditCourseService() {
    const { put } = useDecoredFetch();
    const editCourse = useCallback(
        async (id, values) => {
            const result = await put(
                `${COURSES_ENDPOINTS.COURSES}/${id}`,
                values
            );
            return result;
        },
        [put]
    );
    return { editCourse };
}

export default useEditCourseService;
