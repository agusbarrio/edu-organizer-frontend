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

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {modalComponent}
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContextProvider;
