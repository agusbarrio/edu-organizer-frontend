import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { AUTH_ENDPOINTS } from 'constants/ENDPOINTS';
import useSessionContext from 'hooks/useSessionContext';

function useLoginService() {
  const { post } = useDecoredFetch();
  const { login: loginContext } = useSessionContext();
  const login = useCallback(
    async (values) => {
      const result = await post(
        AUTH_ENDPOINTS.LOGIN,
        values,
        {},
        { showSuccessMessage: false },
      );
      if (!!result) {
        loginContext({ userPermissions: result.permissions.map(permissionData => permissionData.permission) })
      }
    },
    [post, loginContext,]
  );
  return { login };
}

export default useLoginService;
