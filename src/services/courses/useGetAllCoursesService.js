import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { COURSES_ENDPOINTS } from 'constants/ENDPOINTS';

function useGetAllCoursesService() {
    const { get } = useDecoredFetch();
    const getAllCourses = useCallback(
        async (values) => {
            const result = await get(
                COURSES_ENDPOINTS.COURSES,
                values,
                { showSuccessMessage: false },
            );
            return result;
        },
        [get]
    );
    return { getAllCourses };
}

export default useGetAllCoursesService;
