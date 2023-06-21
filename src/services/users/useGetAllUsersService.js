import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { USERS_ENDPOINTS } from 'constants/ENDPOINTS';

function useGetAllUsersService() {
    const { get } = useDecoredFetch();
    const getAllUsers = useCallback(
        async (reqConfig) => {
            const result = await get(
                USERS_ENDPOINTS.USERS,
                reqConfig,
                { showSuccessMessage: false },
            );
            return result;

        }, [get])

    return { getAllUsers };
}

export default useGetAllUsersService;
