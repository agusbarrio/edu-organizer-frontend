import AlertModal from 'components/generic/modals/AlertModal';
import ConfirmModal from 'components/generic/modals/ConfirmModal';
import { createContext, useCallback, useState } from 'react';

export const ModalContext = createContext();

function ModalContextProvider({ children }) {
  const [modalComponent, setModalComponent] = useState(null);

  const openModal = useCallback((Component, props) => {
    setModalComponent(<Component open={true} {...props}></Component>);
  }, []);

  const closeModal = useCallback(() => {
    setModalComponent(null);
  }, []);

  const confirm = useCallback((props) => {
    openModal(ConfirmModal, props)
  }, [openModal])

  const alert = useCallback((props) => {
    openModal(AlertModal, props)
  }, [openModal])

  return (
    <ModalContext.Provider value={{ openModal, closeModal, confirm, alert }}>
      {modalComponent}
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContextProvider;
