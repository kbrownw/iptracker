import { useState } from "react";

export const useGetUserIP = () => {
  const [userIPAddress, setUserIPAddress] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [userIPError, setUserIPError] = useState<any>(false);

  const getUserIP = async () => {
    let response;
    let data: { ip: string };

    setIsLoading(true);
    setUserIPError("");

    try {
      response = await fetch("https://api.ipify.org?format=json");
    } catch (e) {
      console.log("Error looking for users IP address: ", e);
      setUserIPError(e);
      setIsLoading(false);
    }

    if (response) {
      try {
        data = await response.json();
        setUserIPAddress(data.ip);
      } catch (e) {
        console.log("Error setting users IP address response: ", e);
        setUserIPError(e);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return { userIPAddress, isLoading, userIPError, getUserIP };
};
