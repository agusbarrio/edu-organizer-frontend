import useDecoredFetch from 'hooks/useDecoredFetch';
import { AUTH_ENDPOINTS } from 'constants/ENDPOINTS';
import { useCallback } from 'react';

function useResetPasswordService() {
  const { put } = useDecoredFetch();
  const resetPassword = useCallback(
    async (values) => {
      const result = await put(AUTH_ENDPOINTS.RESET_PASSWORD, values);
      return result
    },
    [put]
  );
  return { resetPassword };
}

export default useResetPasswordService;
