import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { FILES_ENDPOINTS } from 'constants/ENDPOINTS';

function useCreateSingleImageService() {
    const { post } = useDecoredFetch();
    const createSingleImage = useCallback(
        async (values, config) => {
            const result = await post(
                FILES_ENDPOINTS.SINGLE_IMAGE,
                values,
                { headers: { 'Content-Type': 'multipart/form-data' } },
                {
                    showSuccessMessage: false,
                    ...config
                }
            );
            return result;
        },
        [post]
    );
    return { createSingleImage };
}

export default useCreateSingleImageService;
