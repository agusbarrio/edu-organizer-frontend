import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { USER_ENDPOINTS } from 'constants/ENDPOINTS';

function useGetMyUserService() {
    const { get } = useDecoredFetch();
    const getMyUser = useCallback(
        async (reqConfig) => {
            const result = await get(
                USER_ENDPOINTS.USER,
                reqConfig,
                { showSuccessMessage: false },
            );
            return result;

        }, [get])

    return { getMyUser };
}

export default useGetMyUserService;
