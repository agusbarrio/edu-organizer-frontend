import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { CLASS_SESSIONS_ENDPOINTS } from 'constants/ENDPOINTS';

function useDeleteClassSessionService() {
    const { del } = useDecoredFetch();
    const deleteClassSession = useCallback(
        async (id) => {
            const result = await del(
                `${CLASS_SESSIONS_ENDPOINTS.CLASS_SESSIONS}/${id}`
            );
            return result;
        },
        [del]
    );
    return { deleteClassSession };
}

export default useDeleteClassSessionService;
