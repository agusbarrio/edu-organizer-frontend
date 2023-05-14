import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { STUDENTS_ENDPOINTS } from 'constants/ENDPOINTS';

function useGetAllStudentsService() {
    const { get } = useDecoredFetch();
    const getAllStudents = useCallback(
        async (values) => {
            const result = await get(
                STUDENTS_ENDPOINTS.STUDENTS,
                values,
                { showSuccessMessage: false },
            );
            return result;
        },
        [get]
    );
    return { getAllStudents };
}

export default useGetAllStudentsService;
