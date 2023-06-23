import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { USER_ENDPOINTS } from 'constants/ENDPOINTS';

function useEditMyUserService() {
    const { put } = useDecoredFetch();
    const editMyUser = useCallback(
        async (values) => {
            const result = await put(
                USER_ENDPOINTS.USER,
                values,
            );
            return result;
        }, [put])

    return { editMyUser };
}

export default useEditMyUserService;
