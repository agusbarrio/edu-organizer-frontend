import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { FILES_ENDPOINTS } from 'constants/ENDPOINTS';

function useClearUnusedFilesService() {
    const { del } = useDecoredFetch();
    const clearUnusedFiles = useCallback(
        async (values) => {
            const result = await del(
                FILES_ENDPOINTS.CLEAR_UNUSED,
                values,
            );
            return result;
        },
        [del]
    );
    return { clearUnusedFiles };
}

export default useClearUnusedFilesService;
