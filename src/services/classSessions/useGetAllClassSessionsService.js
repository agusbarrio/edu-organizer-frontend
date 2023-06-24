import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { CLASS_SESSIONS_ENDPOINTS } from 'constants/ENDPOINTS';

function useGetAllClassSessionsService() {
    const { get } = useDecoredFetch();
    const getAllClassSessions = useCallback(
        async (reqConfig) => {
            const result = await get(
                CLASS_SESSIONS_ENDPOINTS.CLASS_SESSIONS,
                reqConfig,
                { showSuccessMessage: false },
            );
            return result;

        }, [get])

    return { getAllClassSessions };
}

export default useGetAllClassSessionsService;
