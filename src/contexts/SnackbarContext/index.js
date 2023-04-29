import { createContext, useCallback, useState } from 'react';

import _ from 'lodash';
import { Alert, Snackbar } from '@mui/material';
import useLocaleContext from 'hooks/useLocaleContext';
import CORE_TEXTS from 'constants/CORE_TEXTS';
export const SnackbarContext = createContext();

function SnackbarContextProvider({
  children,
}) {
  const { translate } = useLocaleContext()
  const [openState, setOpenState] = useState(false);
  const [props, setProps] = useState({});

  const open = useCallback((propsParam) => {
    setProps(propsParam)
    setOpenState(true)
  }, [])
  const close = useCallback(() => {
    setOpenState(false)
  }, [])

  const success = useCallback((propsParam) => {
    open({
      severity: 'success',
      message: propsParam?.message ?? translate(CORE_TEXTS.GENERIC_SUCCESS),
      ...propsParam
    })
  }, [open, translate])

  const error = useCallback((propsParam = {}) => {
    open({
      severity: 'error',
      message: propsParam?.message ?? translate(CORE_TEXTS.GENERIC_ERROR),
      ...propsParam
    })
  }, [open, translate])

  const info = useCallback((propsParam = {}) => {
    open({
      severity: 'info',
      ...propsParam
    })
  }, [open,])

  const warning = useCallback((propsParam = {}) => {
    open({
      severity: 'warning',
      ...propsParam
    })
  }, [open,])

  const handleClose = useCallback(() => {
    close()
  }, [close])

  return (
    <SnackbarContext.Provider value={{ open, close, success, error, info, warning }}>
      {children}
      <Snackbar open={openState} autoHideDuration={6000} onClose={handleClose}>
        <Alert sx={{ width: '100%' }} {...props}>
          {props?.message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
}

export default SnackbarContextProvider;
