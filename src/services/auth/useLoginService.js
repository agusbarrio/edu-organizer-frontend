import { useCallback } from 'react';

import useDecoredFetch from 'hooks/useDecoredFetch';

import { AUTH_ENDPOINTS } from 'constants/ENDPOINTS';
import useSessionContext from 'hooks/useSessionContext';
function useLoginService() {
  const { post } = useDecoredFetch();
  const { login: loginContext, logout: logoutContext } = useSessionContext();
  const login = useCallback(
    async (values) => {
      const result = await post(
        AUTH_ENDPOINTS.LOGIN,
        values,
        {
          withCredentials: true,
        },
        { logout401: false, showSuccessMessage: false }
      );
      if (!!result) {
        loginContext();
      } else {
        logoutContext();
      }
    },
    [post, loginContext, logoutContext]
  );
  return { login };
}

export default useLoginService;
