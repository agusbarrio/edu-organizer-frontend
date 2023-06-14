import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { COURSE_ACCESS_ENDPOINTS } from 'constants/ENDPOINTS';

function useCreateNewStudentService() {
    const { post } = useDecoredFetch();
    const createNewStudent = useCallback(
        async (values) => {
            const result = await post(
                `${COURSE_ACCESS_ENDPOINTS.COURSE}/students`,
                values,
            );
            return result;
        },
        [post]
    );
    return { createNewStudent };
}

export default useCreateNewStudentService;
