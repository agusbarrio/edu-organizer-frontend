import {
  DialogContent,
  DialogContentText,
  DialogTitle,
  Dialog as DialogMaterial,
  DialogActions,
  Button,
  Divider,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useCallback } from 'react';

import _ from 'lodash';
import useModalContext from 'hooks/useModalContext';

function AlertModal({
  children,
  onClose,
  closeButtonText = 'Close',
  textContent,
  title,
  open = false,
  maxWidth = 'sm',
  ...props
}) {
  const { closeModal } = useModalContext();

  const handleClose = useCallback(() => {
    if (_.isFunction(onClose)) onClose();
    closeModal();
  }, [closeModal, onClose]);

  return (
    <DialogMaterial
      open={open}
      onClose={handleClose}
      maxWidth={maxWidth}
      fullWidth={true}
      {...props}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      <Divider></Divider>
      <DialogContent>
        {textContent && <DialogContentText>{textContent}</DialogContentText>}
        {children}
      </DialogContent>
      <Divider></Divider>
      <DialogActions>
        <Button onClick={handleClose}>{closeButtonText}</Button>
      </DialogActions>
    </DialogMaterial>
  );
}

AlertModal.propTypes = {
  children: PropTypes.any,
  onClose: PropTypes.func,
  closeButtonText: PropTypes.string,
  textContent: PropTypes.string,
  title: PropTypes.string,
  open: PropTypes.bool,
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'md']),
};

export default AlertModal;
