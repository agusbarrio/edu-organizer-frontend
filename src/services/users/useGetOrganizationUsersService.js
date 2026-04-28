import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { USERS_ENDPOINTS } from 'constants/ENDPOINTS';

function useGetOrganizationUsersService() {
    const { get } = useDecoredFetch();
    const getOrganizationUsers = useCallback(
        async (reqConfig) => {
            const result = await get(
                USERS_ENDPOINTS.ORGANIZATION_USERS,
                reqConfig,
                { showSuccessMessage: false },
            );
            return result;

        }, [get])

    return { getOrganizationUsers };
}

export default useGetOrganizationUsersService;
