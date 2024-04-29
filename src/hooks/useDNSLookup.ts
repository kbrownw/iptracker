import { useState } from "react";
import { DNSData } from "../types/types";

export const useDNSLookup = () => {
  const [error, setError] = useState(false);
  const [dnsResponse, setDNSResponse] = useState<DNSData | undefined>(
    undefined
  );
  const [dnsIsLoading, setDnsIsLoading] = useState(false);

  const getIPFromDomain = async (name: string) => {
    const url = `https://cloudflare-dns.com/dns-query?name=${name}`;
    let response;
    let data: DNSData;

    setError(false);
    setDnsIsLoading(true);

    try {
      response = await fetch(url, {
        headers: {
          Accept: "application/dns-json",
        },
      });
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
        setDnsIsLoading(false);
      }
    }
  };

  return { dnsIsLoading, dnsResponse, error, getIPFromDomain };
};
