import useDecoredFetch from 'hooks/useDecoredFetch';
import { AUTH_ENDPOINTS } from 'constants/ENDPOINTS';
import { useCallback } from 'react';

function useVerifyAccountService() {
  const { put } = useDecoredFetch();
  const verifyAccount = useCallback(
    async (values) => {
      const result = await put(AUTH_ENDPOINTS.VERIFY_ACCOUNT, values);
      return result
    },
    [put]
  );
  return { verifyAccount };
}

export default useVerifyAccountService;
