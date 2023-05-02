import { useSnackbar as useSnackbarNotistack } from 'notistack';
import { useCallback } from 'react';

function useSnackbar() {
    const { enqueueSnackbar, closeSnackbar } = useSnackbarNotistack();

    const success = useCallback(
        (message, config) => {
            const defaultConfig = {
                variant: 'success',
                preventDuplicate: true,
            };
            enqueueSnackbar(message, { ...defaultConfig, ...config });
        },
        [
            enqueueSnackbar,
        ]
    );
    const warning = useCallback(
        (message, config) => {
            const defaultConfig = {
                variant: 'warning',
                preventDuplicate: true,
            };
            enqueueSnackbar(message, { ...defaultConfig, ...config });
        },
        [
            enqueueSnackbar,
        ]
    );
    const info = useCallback(
        (message, config) => {
            const defaultConfig = {
                variant: 'info',
                preventDuplicate: true,
            };
            enqueueSnackbar(message, { ...defaultConfig, ...config });
        },
        [
            enqueueSnackbar,
        ]
    );
    const error = useCallback(
        (message, config) => {

            const defaultConfig = {
                variant: 'error',
                preventDuplicate: true,
            };
            enqueueSnackbar(message, { ...defaultConfig, ...config });
        },
        [
            enqueueSnackbar,
        ]
    );

    return { enqueueSnackbar, closeSnackbar, success, warning, info, error };
}

export default useSnackbar;
