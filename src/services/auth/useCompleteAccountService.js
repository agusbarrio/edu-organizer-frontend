import useDecoredFetch from 'hooks/useDecoredFetch';
import { AUTH_ENDPOINTS } from 'constants/ENDPOINTS';
import { useCallback } from 'react';

function useCompleteAccountService() {
  const { put } = useDecoredFetch();
  const completeAccount = useCallback(
    async (values) => {
      const result = await put(AUTH_ENDPOINTS.COMPLETE_ACCOUNT, values);
      return result
    },
    [put]
  );
  return { completeAccount };
}

export default useCompleteAccountService;
