import { useAppContext } from "../context/AppContext";
import { InfoItem } from "./InfoItem";

export const InfoContainer = () => {
  const { ipData, isLoading } = useAppContext();
  return (
    <div
      className="flex flex-col min-w-[80vw] max-w-[80vw] mx-auto py-5 gap-5 bg-white rounded-2xl divide-x-[1px] divide-gray-300 justify-around
    md:flex-row md:py-12 md:max-w-[95vw] lg:max-w-[80vw]"
    >
      <InfoItem
        title="IP ADDRESS"
        data={ipData?.ipAddress}
        isLoading={isLoading}
      />
      <InfoItem
        title="LOCATION"
        data={`${ipData?.cityName}, ${ipData?.regionName}`}
        data2={ipData?.zipCode}
        isLoading={isLoading}
      />
      <InfoItem
        title="TIMEZONE"
        data={`UTC ${ipData?.timeZone}`}
        isLoading={isLoading}
      />
      <InfoItem
        title="COUNTRY"
        data={ipData?.countryName}
        isLoading={isLoading}
      />
    </div>
  );
};
