

import { useCallback, useMemo } from 'react';
import useLocaleContext from 'hooks/useLocaleContext';
import _ from 'lodash';
import FETCH_ERROR_TYPES from 'constants/FETCH_ERROR_TYPES';
import CORE_TEXTS from 'constants/CORE_TEXTS';
import useFetch from './useFetch';
import useSnackbar from './useSnackbar';
import useSessionContext from './useSessionContext';

function useDecoredFetch() {
  const { success: successNotification, error: errorNotification } =
    useSnackbar();
  const { userLogout, courseLogout } = useSessionContext()
  const { translate } = useLocaleContext();

  const defaultConfig = useMemo(
    () => ({
      successMessage: translate(CORE_TEXTS.GENERIC_SUCCESS),
      showSuccessMessage: true,
      showErrorMessage: true,
      errorMessage: null,
      defaultErrorMessage: translate(CORE_TEXTS.GENERIC_ERROR),
      logout401: true,
      navigate404: true,
    }),
    [translate]
  );

  const defaultReqConfig = useMemo(() => ({ withCredentials: true }), []);

  const getHandlers = useCallback(
    (config = {}) => {
      const resultConfig = _.merge(defaultConfig, config);
      return {
        successHandler: (res) => {
          if (resultConfig?.showSuccessMessage)
            successNotification(resultConfig?.successMessage);
          if (resultConfig?.onSuccess) resultConfig.onSuccess(res?.data);
        },
        errorHandler: ({ error, type }) => {
          if (resultConfig?.showErrorMessage) {
            let resultErrorMessage = resultConfig.defaultErrorMessage;
            if (type === FETCH_ERROR_TYPES.SERVER) {
              const status = _.get(error, 'response.status');
              if (status === 401 && resultConfig.logout401) {
                userLogout()
                courseLogout()
              }
              const errorCode = _.get(error, 'response.data.errorCode');
              if (!!CORE_TEXTS.SERVER_ERRORS[errorCode])
                resultErrorMessage = translate(
                  CORE_TEXTS.SERVER_ERRORS[errorCode]
                );
            }
            if (!!resultConfig.errorMessage)
              resultErrorMessage = resultConfig.errorMessage;
            errorNotification(resultErrorMessage);
          }
          if (resultConfig?.onError) resultConfig.onError({ error, type });
        },
      };
    },
    [
      defaultConfig,
      errorNotification,
      successNotification,
      translate,
      userLogout,
      courseLogout,
    ]
  );

  const {
    get: coreGet,
    put: corePut,
    post: corePost,
    del: coreDel,
  } = useFetch();

  const calcReqConfig = useCallback(
    (reqConfig) => _.merge(defaultReqConfig, reqConfig),
    [defaultReqConfig]
  );

  const get = useCallback(
    async (url, reqConfig, config) => {
      const handlers = getHandlers(config);
      const result = await coreGet(url, calcReqConfig(reqConfig), handlers);
      return result?.data;
    },
    [coreGet, getHandlers, calcReqConfig]
  );

  const post = useCallback(
    async (url, data, reqConfig, config) => {
      const handlers = getHandlers(config);
      const result = await corePost(
        url,
        data,
        calcReqConfig(reqConfig),
        handlers
      );
      return result?.data;
    },
    [corePost, getHandlers, calcReqConfig]
  );

  const put = useCallback(
    async (url, data, reqConfig, config) => {
      const handlers = getHandlers(config);
      const result = await corePut(
        url,
        data,
        calcReqConfig(reqConfig),
        handlers
      );
      return result?.data;
    },
    [corePut, getHandlers, calcReqConfig]
  );

  const del = useCallback(
    async (url, reqConfig, config) => {
      const handlers = getHandlers(config);
      const result = await coreDel(url, calcReqConfig(reqConfig), handlers);
      return result?.data;
    },
    [coreDel, getHandlers, calcReqConfig]
  );

  return { get, put, post, del };
}

export default useDecoredFetch;
