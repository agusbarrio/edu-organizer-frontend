import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { AUTH_ENDPOINTS } from 'constants/ENDPOINTS';

function useLogoutService() {
  const { get } = useDecoredFetch();
  const logout = useCallback(async () => {
    const result = await get(
      AUTH_ENDPOINTS.LOGOUT,
      {},
      { showSuccessMessage: false }
    );
    return result;
  }, [get,]);
  return { logout };
}

export default useLogoutService;
