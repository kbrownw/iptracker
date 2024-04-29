import { useState } from "react";
import { DNSData } from "../types/types";

export const useDNSLookup = () => {
  const [error, setError] = useState(false);
  const [dnsResponse, setDNSResponse] = useState<DNSData | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(false);

  const getIPFromDomain = async (name: string) => {
    const url = `https://dns.google.com/resolve?name=${name}`;
    let response;
    let data: DNSData;

    setError(false);
    setIsLoading(true);

    try {
      response = await fetch(url);
    } catch (e) {
      console.log("DNS Fetch Error: ", e);
      setError(true);
    }

    if (response) {
      try {
        data = await response.json();
        setDNSResponse(data);
      } catch (e) {
        console.log("DNS JSON Error: ", e);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return { isLoading, dnsResponse, error, getIPFromDomain };
};
