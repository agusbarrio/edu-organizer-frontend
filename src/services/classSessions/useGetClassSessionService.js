import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { CLASS_SESSIONS_ENDPOINTS } from 'constants/ENDPOINTS';

function useGetClassSessionService() {
    const { get } = useDecoredFetch();
    const getClassSession = useCallback(
        async (id) => {
            const result = await get(
                `${CLASS_SESSIONS_ENDPOINTS.CLASS_SESSIONS}/${id}`,
                null,
                { showSuccessMessage: false },
            );
            return result;
        },
        [get]
    );
    return { getClassSession };
}

export default useGetClassSessionService;
