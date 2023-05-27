import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { COURSES_ENDPOINTS } from 'constants/ENDPOINTS';

function useEditCoursesService() {
    const { put } = useDecoredFetch();
    const editCourses = useCallback(
        async (values) => {
            const result = await put(
                COURSES_ENDPOINTS.COURSES,
                values
            );
            return result;
        },
        [put]
    );
    return { editCourses };
}

export default useEditCoursesService;
