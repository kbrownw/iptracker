import { FormEventHandler, useEffect, useState } from "react";
import Arrow from "../assets/images/icon-arrow.svg";
import { useAppContext } from "../context/AppContext";
import isValidDomain from "is-valid-domain";

export const SearchBox = () => {
  const [ipOrDomain, setIpOrDomain] = useState<string>("");
  const {
    getIPData,
    getIPFromDomain,
    dnsResponse,
    dnsError,
    getUserIP,
    setIsUserIP,
    setNoData,
  } = useAppContext();
  const [error, setError] = useState<string>("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsUserIP(false);
    let isValidIp = ipIsValid();
    if (isValidIp) {
      getIPData(ipOrDomain);
      setError("");
      setNoData(false);
      return;
    } else if (ipOrDomain === "") {
      setIsUserIP(true);
      getUserIP();
      setError("");
      setNoData(false);
      return;
    } else if (isValidDomain(ipOrDomain, { subdomain: true })) {
      getIPFromDomain(ipOrDomain);
      if (dnsError) {
        setError(dnsError);
        setNoData(true);
      } else {
        setError("");
      }

      return;
    }

    setNoData(true);
    setError(
      "Please enter a valid IP address or domain name. E.g. 76.55.192.26 or google.com"
    );
  };

  const ipIsValid = () => {
    const ipArray = ipOrDomain.split(".");
    if (ipArray.length === 4) {
      for (let i = 0; i < 4; i++) {
        let arrItemAsNumber = Number(ipArray[i]);
        if (ipArray[i] === "") {
          return false;
        }
        if (isNaN(arrItemAsNumber)) {
          return false;
        }
        if (arrItemAsNumber < 0 || arrItemAsNumber > 255) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (dnsResponse) {
      if (dnsResponse.Status === 0 && dnsResponse.Answer) {
        if (dnsResponse.Answer[0].type === 1) {
          getIPData(dnsResponse.Answer[0].data);
          setError("");
          setNoData(false);
          return;
        }
      }
      setError(`No valid information for domain ${ipOrDomain}.`);
      setNoData(true);
    }
  }, [dnsResponse]);

  return (
    <form
      className="px-4 mx-auto min-w-[80vw] md:min-w-[45vw]"
      onSubmit={handleSubmit}
    >
      <div className="flex">
        <input
          className="p-3 rounded-s-2xl text-[18px] w-[85%] md:p-4 md:text-[20px] lg:text-[24px] focus:outline-none"
          type="text"
          placeholder="Search for any IP address or domain"
          onChange={(e) => setIpOrDomain(e.target.value)}
          value={ipOrDomain}
        />
        <div className="relative bg-black rounded-e-2xl overflow-hidden flex-grow hover:bg-very-dark-gray">
          <button
            className="absolute w-full h-full z-10 top-0 left-0"
            type="submit"
          ></button>
          <img
            className="absolute bottom-[50%] right-[50%] translate-x-[50%] translate-y-[50%]"
            src={Arrow}
            alt="Right arrow"
          />
        </div>
      </div>

      {!!error ? (
        <p className="py-2 max-w-[400px] mx-auto text-md text-black font-semibold">
          {error}
        </p>
      ) : (
        <div></div>
      )}
    </form>
  );
};
