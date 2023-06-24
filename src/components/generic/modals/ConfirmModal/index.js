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
import { useCallback, } from 'react';

import _ from 'lodash';
import useModalContext from 'hooks/useModalContext';
import CORE_TEXTS from 'constants/CORE_TEXTS';
import useLocaleContext from 'hooks/useLocaleContext';

function ConfirmModal({
  children,
  onClose,
  onConfirm,
  preventCloseOnConfirm = false,
  confirmButtonProps,
  closeButtonProps,
  textContent,
  title,
  open = false,
  maxWidth = 'sm',
  ...props
}) {
  const { closeModal } = useModalContext();
  const { translate } = useLocaleContext()
  const handleClose = useCallback(() => {
    if (_.isFunction(onClose)) onClose();
    closeModal();
  }, [closeModal, onClose]);

  const handleConfirm = useCallback(async () => {
    if (_.isFunction(onConfirm)) onConfirm();
    if (!preventCloseOnConfirm) closeModal();
  }, [onConfirm, closeModal, preventCloseOnConfirm]);

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
        <Button onClick={handleClose} {...closeButtonProps}>
          {closeButtonProps?.children || translate(CORE_TEXTS.GENERIC_CLOSE)}
        </Button>
        <Button
          onClick={handleConfirm}
          variant="contained"
          {...confirmButtonProps}
        >
          {confirmButtonProps?.children || translate(CORE_TEXTS.GENERIC_CONFIRM)}
        </Button>
      </DialogActions>
    </DialogMaterial>
  );
}

ConfirmModal.propTypes = {
  children: PropTypes.any,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  closeButtonText: PropTypes.string,
  confirmButtonText: PropTypes.string,
  textContent: PropTypes.string,
  title: PropTypes.string,
  open: PropTypes.bool,
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'md']),
};

export default ConfirmModal;
