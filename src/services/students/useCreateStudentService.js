import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { STUDENTS_ENDPOINTS } from 'constants/ENDPOINTS';

function useCreateStudentService() {
    const { post } = useDecoredFetch();
    const createStudent = useCallback(
        async (values) => {
            const result = await post(
                STUDENTS_ENDPOINTS.STUDENTS,
                values,
            );
            return result;
        },
        [post]
    );
    return { createStudent };
}

export default useCreateStudentService;
