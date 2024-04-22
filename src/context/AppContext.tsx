import { createContext, useContext } from "react";
import { AppContextTypes } from "../types/types";
import { useIPLookupAPI } from "../hooks/useIPLookupAPI";

interface Props {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContextTypes | undefined>(undefined);

export const AppContextWrapper = ({ children }: Props) => {
  const { ipData, isLoading, error, getIPData } = useIPLookupAPI();

  return (
    <AppContext.Provider value={{ ipData, isLoading, error, getIPData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const isAppContext = useContext(AppContext);

  if (!isAppContext) {
    throw new Error(
      "useAppContext must be used inside the AppContextWrapper element."
    );
  }

  return isAppContext;
};
