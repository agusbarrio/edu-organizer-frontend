import { ModalContext } from 'contexts/ModalContext';
import { useContext } from 'react';

function useModal() {
  const { openModal, closeModal } = useContext(ModalContext);
  return { openModal, closeModal };
}

export default useModal;
