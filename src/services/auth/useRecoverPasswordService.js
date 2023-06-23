import useDecoredFetch from 'hooks/useDecoredFetch';
import { AUTH_ENDPOINTS } from 'constants/ENDPOINTS';
import { useCallback } from 'react';

function useRecoverPasswordService() {
  const { post } = useDecoredFetch();
  const recoverPassword = useCallback(
    async (values) => {
      const result = await post(AUTH_ENDPOINTS.RECOVER_PASSWORD, values);
      return result
    },
    [post]
  );
  return { recoverPassword };
}

export default useRecoverPasswordService;
