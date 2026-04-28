import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { USERS_ENDPOINTS } from 'constants/ENDPOINTS';
import { renderText } from 'utils/text';

function useDeleteOrganizationUserService() {
    const { del } = useDecoredFetch();
    const deleteOrganizationUser = useCallback(
        async (userId, reqConfig) => {
            const result = await del(
                renderText(USERS_ENDPOINTS.ORGANIZATION_USER, { userId }),
                reqConfig
            );
            return result;
        }, [del])

    return { deleteOrganizationUser };
}

export default useDeleteOrganizationUserService;
