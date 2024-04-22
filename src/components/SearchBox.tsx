import { FormEventHandler, useState } from "react";
import Arrow from "../assets/images/icon-arrow.svg";
import { useAppContext } from "../context/AppContext";

export const SearchBox = () => {
  const [ipAddress, setIPAddress] = useState<string>("");
  const { getIPData } = useAppContext();
  const [error, setError] = useState<string>("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    let isValidIp = ipIsValid();
    if (isValidIp) {
      getIPData(ipAddress);
      setError("");
    } else {
      setError("Please enter a valid IP address. E.g. 76.55.192.26");
    }
  };

  const ipIsValid = () => {
    const ipArray = ipAddress.split(".");
    console.log(ipArray);
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

  return (
    <form
      className="px-4 mx-auto min-w-[80vw] md:min-w-[40vw]"
      onSubmit={handleSubmit}
    >
      <div className="flex">
        <input
          className="p-4 rounded-s-2xl text-[28px] w-[85%]"
          type="text"
          placeholder="Enter IP Address"
          onChange={(e) => setIPAddress(e.target.value)}
          value={ipAddress}
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
        <p className="py-2 text-md text-red-500 font-semibold">{error}</p>
      ) : (
        <div></div>
      )}
    </form>
  );
};
