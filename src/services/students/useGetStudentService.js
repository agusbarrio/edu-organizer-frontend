import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { STUDENTS_ENDPOINTS } from 'constants/ENDPOINTS';

function useGetStudentService() {
    const { get } = useDecoredFetch();
    const getStudent = useCallback(
        async (_id) => {
            const result = await get(
                `${STUDENTS_ENDPOINTS.STUDENTS}/${_id}`,
                null,
                { showSuccessMessage: false },
            );
            return result;
        },
        [get]
    );
    return { getStudent };
}

export default useGetStudentService;
