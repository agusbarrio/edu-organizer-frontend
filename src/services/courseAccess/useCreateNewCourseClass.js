import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { COURSE_ACCESS_ENDPOINTS } from 'constants/ENDPOINTS';

function useCreateNewCourseClassService() {
    const { post } = useDecoredFetch();
    const createNewCourseClass = useCallback(
        async (values) => {
            const result = await post(
                `${COURSE_ACCESS_ENDPOINTS.COURSE}/newClass`,
                values,
            );
            return result;
        },
        [post]
    );
    return { createNewCourseClass };
}

export default useCreateNewCourseClassService;
