import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { ORGANIZATION_ENDPOINTS } from 'constants/ENDPOINTS';

function useGetMyOrganizationService() {
    const { get } = useDecoredFetch();
    const getMyOrganization = useCallback(
        async (reqConfig) => {
            const result = await get(
                ORGANIZATION_ENDPOINTS.ORGANIZATION,
                reqConfig,
                { showSuccessMessage: false },
            );
            return result;

        }, [get])

    return { getMyOrganization };
}

export default useGetMyOrganizationService;
