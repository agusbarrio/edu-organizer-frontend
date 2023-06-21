import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { USERS_ENDPOINTS } from 'constants/ENDPOINTS';

function useDenyRegistrationService() {
    const { put } = useDecoredFetch();
    const denyRegistration = useCallback(
        async (id) => {
            const result = await put(
                `${USERS_ENDPOINTS.USERS}/${id}/denyRegistration`,
            );
            return result;
        },
        [put]
    );
    return { denyRegistration };
}

export default useDenyRegistrationService;
