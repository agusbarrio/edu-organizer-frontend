import axios from 'axios';
import _ from 'lodash';
import FETCH_ERROR_TYPES from 'constants/FETCH_ERROR_TYPES';

const axiosHandler = async (axiosFunction, successHandler, errorHandler) => {
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
}

const defaultConfig = { withCredentials: true }

const getConfig = (config) => {
    return _.merge(_.cloneDeep(defaultConfig), config)
}

export const get = async (url, incomingConfig, handlers) => {
    const config = getConfig(incomingConfig)
    return await axiosHandler(
        async () => await axios.get(url, config),
        handlers?.successHandler,
        handlers?.errorHandler
    );
}


export const post = async (url, data, incomingConfig, handlers) => {
    const config = getConfig(incomingConfig)
    return await axiosHandler(
        async () => await axios.post(url, data, config),
        handlers?.successHandler,
        handlers?.errorHandler
    );
}

export const put = async (url, data, incomingConfig, handlers) => {
    const config = getConfig(incomingConfig)
    return await axiosHandler(
        async () => await axios.put(url, data, config),
        handlers?.successHandler,
        handlers?.errorHandler
    );
}

export const del = async (url, incomingConfig, handlers) => {
    const config = getConfig(incomingConfig)
    return await axiosHandler(
        async () => await axios.delete(url, config),
        handlers?.successHandler,
        handlers?.errorHandler
    );
}

const methods = {
    get,
    post,
    put,
    del,
};

export default methods;

