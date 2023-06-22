import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { ORGANIZATIONS_ENDPOINTS } from 'constants/ENDPOINTS';

function useGetAllOrganizationsService() {
    const { get } = useDecoredFetch();
    const getAllOrganizations = useCallback(
        async (reqConfig) => {
            const result = await get(
                ORGANIZATIONS_ENDPOINTS.ORGANIZATIONS,
                reqConfig,
                { showSuccessMessage: false },
            );
            return result;

        }, [get])

    return { getAllOrganizations };
}

export default useGetAllOrganizationsService;
