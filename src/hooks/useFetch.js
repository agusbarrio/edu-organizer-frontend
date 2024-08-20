import axios from 'axios';
import { useCallback } from 'react';
import _ from 'lodash';
import FETCH_ERROR_TYPES from 'constants/FETCH_ERROR_TYPES';

import useSessionContext from './useSessionContext';

function useFetch() {
  const axiosHandler = useCallback(
    async (axiosFunction, successHandler, errorHandler) => {
      try {
        const response = await axiosFunction();

        if (_.isFunction(successHandler)) successHandler(response);
        return response;
      } catch (error) {
        const result = {
          error,
          type: null,
        };
        if (error.response) {
          result.type = FETCH_ERROR_TYPES.SERVER;
        } else if (error.request) {
          result.type = FETCH_ERROR_TYPES.CLIENT;
        } else {
          result.type = FETCH_ERROR_TYPES.OTHER;
        }

        if (_.isFunction(errorHandler)) {
          errorHandler(result);
        }
      }
    },
    []
  );

  const { userSession: { token }, courseSession: { token: courseToken } } = useSessionContext()

  const appendTokensToConfig = useCallback((config) => {
    if (token) {
      config.headers = {
        ...config.headers,
        'user-authorization': `Bearer ${token}`
      }
    }
    if (courseToken) {
      config.headers = {
        ...config.headers,
        'course-authorization': `Bearer ${courseToken}`
      }
    }
    return config
  }, [token, courseToken])

  const get = useCallback(
    async (url, config, handlers) => {
      return await axiosHandler(
        async () => await axios.get(url, appendTokensToConfig(config)),
        handlers?.successHandler,
        handlers?.errorHandler
      );
    },
    [axiosHandler, appendTokensToConfig]
  );

  const post = useCallback(
    async (url, data, config, handlers) => {
      return await axiosHandler(
        async () => await axios.post(url, data, appendTokensToConfig(config)),
        handlers?.successHandler,
        handlers?.errorHandler
      );
    },
    [axiosHandler, appendTokensToConfig]
  );

  const put = useCallback(
    async (url, data, config, handlers) => {
      return await axiosHandler(
        async () => await axios.put(url, data, appendTokensToConfig(config)),
        handlers?.successHandler,
        handlers?.errorHandler
      );
    },
    [axiosHandler, appendTokensToConfig]
  );

  const del = useCallback(
    async (url, config, handlers) => {
      return await axiosHandler(
        async () => await axios.delete(url, appendTokensToConfig(config)),
        handlers?.successHandler,
        handlers?.errorHandler
      );
    },
    [axiosHandler, appendTokensToConfig]
  );

  return { get, post, put, del };
}

export default useFetch;
