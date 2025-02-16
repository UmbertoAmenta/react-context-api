import { createContext, useContext } from "react";

const AlertContext = createContext();

function AlertProvider({ children }) {
  return <AlertContext.Provider value={{}}>{children}</AlertContext.Provider>;
}

function useAlertContext() {
  const context = useContext(AlertContext);
  return context;
}

export { useAlertContext, AlertProvider };
