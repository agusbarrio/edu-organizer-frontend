import { ModalContext } from 'contexts/ModalContext';
import { useContext } from 'react';

function useModalContext() {
  const { openModal, closeModal } = useContext(ModalContext);
  return { openModal, closeModal };
}

export default useModalContext;
