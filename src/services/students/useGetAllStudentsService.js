import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { STUDENTS_ENDPOINTS } from 'constants/ENDPOINTS';

function useGetAllStudentsService(reqConfigDefault) {
    const { get } = useDecoredFetch();
    const getAllStudents = useCallback(
        async (reqConfig) => {
            const config = reqConfig ?? reqConfigDefault;
            const result = await get(
                STUDENTS_ENDPOINTS.STUDENTS,
                config,
                { showSuccessMessage: false },
            );
            return result;

        }, [get, reqConfigDefault])

    return { getAllStudents };
}

export default useGetAllStudentsService;
