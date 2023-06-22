import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { ORGANIZATION_ENDPOINTS } from 'constants/ENDPOINTS';

function useEditMyOrganizationService() {
    const { put } = useDecoredFetch();
    const editMyOrganization = useCallback(
        async (values) => {
            const result = await put(
                ORGANIZATION_ENDPOINTS.ORGANIZATION,
                values,
            );
            return result;

        }, [put])

    return { editMyOrganization };
}

export default useEditMyOrganizationService;
