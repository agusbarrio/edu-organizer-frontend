import { ModalContext } from 'contexts/ModalContext';
import { useContext } from 'react';

function useModalContext() {
  const { openModal, closeModal, confirm, alert } = useContext(ModalContext);
  return { openModal, closeModal, confirm, alert };
}

export default useModalContext;
