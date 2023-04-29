import { useCallback } from 'react';
import useDecoredFetch from '../../core/hooks/useDecoredFetch';
import useNavigate from '../../core/hooks/useNavigate';
import AUTH_ENDPOINTS from '../constants/endpoints';
import authPaths from '../routes/paths';
function useRegisterService() {
  const { post } = useDecoredFetch();
  const { go } = useNavigate();
  const register = useCallback(
    async (values) => {
      const result = await post(AUTH_ENDPOINTS.REGISTER, values);
      if (!!result) go(authPaths.login);
    },
    [post, go]
  );
  return { register };
}

export default useRegisterService;
