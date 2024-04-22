import { useState } from "react";
import { IPData } from "../types/types";

export const useIPLookupAPI = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>("");
  const [ipData, setIPData] = useState<IPData>(null!);

  const getIPData = async (ipAddress?: string) => {
    const url = ipAddress
      ? `https://freeipapi.com/api/json/${ipAddress}`
      : `https://freeipapi.com/api/json/`;
    let response;
    let data: IPData;

    setIsLoading(true);
    setError("");

    try {
      response = await fetch(url);
      //Need to find way to capture HTTP GET errors (like too many requests)
    } catch (e) {
      console.log("Fetch error: ", e);
      setError(e);
    }

    if (response) {
      try {
        data = await response.json();
        setIPData(data);
      } catch (e) {
        console.log("Error setting data: ", e);
        setError(e);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return { isLoading, error, ipData, getIPData };
};
