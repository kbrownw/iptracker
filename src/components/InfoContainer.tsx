import { useAppContext } from "../context/AppContext";
import { IPData } from "../types/types";
import { InfoItem } from "./InfoItem";
import { useEffect, useState } from "react";

export const InfoContainer = () => {
  const { ipData, isLoading, isUserIP, dnsIsLoading } = useAppContext();
  const [ipV4Data, setIPV4Data] = useState<IPData>(null!);

  useEffect(() => {
    if (!!ipData) {
      if (ipData.ipVersion === 4) {
        setIPV4Data(ipData);
      }
    }
  }, [ipData]);

  return (
    <div
      className="flex flex-col min-w-[80vw] max-w-[80vw] mx-auto py-5 gap-5 bg-white rounded-2xl divide-x-[1px] divide-gray-300 justify-around
    md:flex-row md:py-12 md:max-w-[95vw] lg:max-w-[80vw]"
    >
      <InfoItem
        title={isUserIP ? "IP ADDRESS (YOURS)" : "IP ADDRESS"}
        data={ipV4Data?.ipAddress}
        isLoading={isLoading || dnsIsLoading}
      />
      <InfoItem
        title="LOCATION"
        data={`${ipV4Data?.cityName}, ${ipV4Data?.regionName}`}
        data2={ipV4Data?.zipCode}
        isLoading={isLoading || dnsIsLoading}
      />
      <InfoItem
        title="TIMEZONE"
        data={`UTC ${ipV4Data?.timeZone}`}
        isLoading={isLoading || dnsIsLoading}
      />
      <InfoItem
        title="COUNTRY"
        data={ipV4Data?.countryName}
        isLoading={isLoading || dnsIsLoading}
      />
    </div>
  );
};
