import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { USER_ENDPOINTS } from 'constants/ENDPOINTS';

function useChangePasswordService() {
    const { put } = useDecoredFetch();
    const changePassword = useCallback(
        async (values) => {
            const result = await put(
                `${USER_ENDPOINTS.USER}/changePassword`,
                values,
            );
            return result;
        }, [put])

    return { changePassword };
}

export default useChangePasswordService;
