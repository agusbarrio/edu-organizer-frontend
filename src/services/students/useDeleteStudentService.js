import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { STUDENTS_ENDPOINTS } from 'constants/ENDPOINTS';

function useDeleteStudentService() {
    const { del } = useDecoredFetch();
    const deleteStudent = useCallback(
        async (id) => {
            const result = await del(
                `${STUDENTS_ENDPOINTS.STUDENTS}/${id}`
            );
            return result;
        },
        [del]
    );
    return { deleteStudent };
}

export default useDeleteStudentService;
