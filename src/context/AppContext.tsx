import { createContext, useContext } from "react";
import { AppContextTypes } from "../types/types";
import { useIPLookupAPI } from "../hooks/useIPLookupAPI";
import { useDNSLookup } from "../hooks/useDNSLookup";

interface Props {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContextTypes | undefined>(undefined);

export const AppContextWrapper = ({ children }: Props) => {
  const { ipData, isLoading, error, isUserIP, getIPData } = useIPLookupAPI();
  const {
    dnsResponse,
    isLoading: dnsIsLoading,
    error: dnsError,
    getIPFromDomain,
  } = useDNSLookup();

  return (
    <AppContext.Provider
      value={{
        ipData,
        isLoading,
        error,
        isUserIP,
        getIPData,
        dnsResponse,
        dnsIsLoading,
        dnsError,
        getIPFromDomain,
      }}
    >
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
