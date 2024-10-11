import { createContext, useState } from "react";

export const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isLogoutModalOpen, setLogoutModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
}
