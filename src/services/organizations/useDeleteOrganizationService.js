import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { ORGANIZATIONS_ENDPOINTS } from 'constants/ENDPOINTS';

function useDeleteOrganizationService() {
    const { del } = useDecoredFetch();
    const deleteOrganization = useCallback(
        async (id) => {
            const result = await del(
                `${ORGANIZATIONS_ENDPOINTS.ORGANIZATIONS}/${id}`,
            );
            return result;
        },
        [del]
    );
    return { deleteOrganization };
}

export default useDeleteOrganizationService;
