import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { USERS_ENDPOINTS } from 'constants/ENDPOINTS';
import { renderText } from 'utils/text';

function useEditOrganizationUserPermissionsService() {
    const { put } = useDecoredFetch();
    const editOrganizationUserPermissions = useCallback(
        async ({ userId, permissions }, reqConfig) => {
            const result = await put(
                renderText(USERS_ENDPOINTS.ORGANIZATION_USER_PERMISSIONS, { userId }),
                { permissions },
                reqConfig
            );
            return result;
        }, [put])

    return { editOrganizationUserPermissions };
}

export default useEditOrganizationUserPermissionsService;
