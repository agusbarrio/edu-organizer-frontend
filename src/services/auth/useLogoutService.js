import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { AUTH_ENDPOINTS } from 'constants/ENDPOINTS';
import useSessionContext from 'hooks/useSessionContext';


function useLogoutService() {
  const { get } = useDecoredFetch();
  const { logout: logoutContext } = useSessionContext();
  const logout = useCallback(async () => {
    await get(
      AUTH_ENDPOINTS.LOGOUT,
      {},
      { showSuccessMessage: false }
    );
    logoutContext();
  }, [get, logoutContext]);
  return { logout };
}

export default useLogoutService;
