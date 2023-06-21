import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { USERS_ENDPOINTS } from 'constants/ENDPOINTS';

function useAllowRegistrationService() {
    const { put } = useDecoredFetch();
    const allowRegistration = useCallback(
        async (id) => {
            const result = await put(
                `${USERS_ENDPOINTS.USERS}/${id}/allowRegistration`,
            );
            return result;
        },
        [put]
    );
    return { allowRegistration };
}

export default useAllowRegistrationService;
