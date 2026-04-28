import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { USERS_ENDPOINTS } from 'constants/ENDPOINTS';

function useCreateOrganizationUserService() {
    const { post } = useDecoredFetch();
    const createOrganizationUser = useCallback(
        async (data, reqConfig) => {
            const result = await post(
                USERS_ENDPOINTS.ORGANIZATION_USERS,
                data,
                reqConfig
            );
            return result;
        }, [post])

    return { createOrganizationUser };
}

export default useCreateOrganizationUserService;
