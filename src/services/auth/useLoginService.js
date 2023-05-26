import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { AUTH_ENDPOINTS } from 'constants/ENDPOINTS';

function useLoginService() {
  const { post } = useDecoredFetch();
  const login = useCallback(
    async (values) => {
      const result = await post(
        AUTH_ENDPOINTS.LOGIN,
        values,
        {},
        { showSuccessMessage: false },
      );
      return result;
    },
    [post]
  );
  return { login };
}

export default useLoginService;
