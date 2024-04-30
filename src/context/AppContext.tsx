import { createContext, useContext, useState } from "react";
import { AppContextTypes } from "../types/types";
import { useIPLookupAPI } from "../hooks/useIPLookupAPI";
import { useDNSLookup } from "../hooks/useDNSLookup";
import { useGetUserIP } from "../hooks/useGetUserIP";

interface Props {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContextTypes | undefined>(undefined);

export const AppContextWrapper = ({ children }: Props) => {
  const [isUserIP, setIsUserIP] = useState(false);
  const [noData, setNoData] = useState(false);
  const { ipData, isLoading, error, getIPData } = useIPLookupAPI();
  const {
    dnsResponse,
    dnsIsLoading,
    error: dnsError,
    getIPFromDomain,
  } = useDNSLookup();
  const {
    userIPAddress,
    isLoading: userIPIsLoading,
    userIPError,
    getUserIP,
  } = useGetUserIP();

  return (
    <AppContext.Provider
      value={{
        noData,
        setNoData,
        isUserIP,
        setIsUserIP,
        ipData,
        isLoading,
        error,
        getIPData,
        dnsResponse,
        dnsIsLoading,
        dnsError,
        getIPFromDomain,
        userIPAddress,
        userIPIsLoading,
        userIPError,
        getUserIP,
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
