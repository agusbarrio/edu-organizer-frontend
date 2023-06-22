import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { STUDENTS_ENDPOINTS } from 'constants/ENDPOINTS';

function useEditStudentService() {
    const { put } = useDecoredFetch();
    const editStudent = useCallback(
        async (id, values) => {
            const result = await put(
                `${STUDENTS_ENDPOINTS.STUDENTS}/${id}`,
                values
            );
            return result;
        },
        [put]
    );
    return { editStudent };
}

export default useEditStudentService;
