import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { COURSES_ENDPOINTS } from 'constants/ENDPOINTS';

function useCreateCourseService() {
    const { post } = useDecoredFetch();
    const createCourse = useCallback(
        async (values) => {
            const result = await post(
                COURSES_ENDPOINTS.COURSES,
                values,
            );
            return result;
        },
        [post]
    );
    return { createCourse };
}

export default useCreateCourseService;
