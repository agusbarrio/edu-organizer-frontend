import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { CLASS_SESSIONS_ENDPOINTS, } from 'constants/ENDPOINTS';

function useEditClassSessionService() {
    const { put } = useDecoredFetch();
    const editClassSession = useCallback(
        async (id, values) => {
            const result = await put(
                `${CLASS_SESSIONS_ENDPOINTS.CLASS_SESSIONS}/${id}`,
                values,
            );
            return result;
        },
        [put]
    );
    return { editClassSession };
}

export default useEditClassSessionService;
