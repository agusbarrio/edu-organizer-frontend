import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { COURSE_ACCESS_ENDPOINTS } from 'constants/ENDPOINTS';

function useEditClassSessionService() {
    const { put } = useDecoredFetch();
    const editClassSession = useCallback(
        async (id, values) => {
            const result = await put(
                `${COURSE_ACCESS_ENDPOINTS.COURSE}/classSessions/${id}`,
                values,
            );
            return result;
        },
        [put]
    );
    return { editClassSession };
}

export default useEditClassSessionService;
