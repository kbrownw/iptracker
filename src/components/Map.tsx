import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { useAppContext } from "../context/AppContext";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import MarkerIcon from "../assets/images/icon-location.svg";
import L from "leaflet";
import useMediaQuery from "../hooks/useMediaQuery";

export const Map = () => {
  const { isLoading, ipData } = useAppContext();
  const isMediumScreen = useMediaQuery("(min-width: 770px)");
  const [position, setPosition] = useState<LatLngExpression | undefined>(
    undefined
  );
  const customIconLarge = new L.Icon({
    iconUrl: MarkerIcon,
    iconSize: [50, 65],
    iconAnchor: [25, 65],
  });
  const customIconSmall = new L.Icon({
    iconUrl: MarkerIcon,
    iconSize: [30, 40],
    iconAnchor: [15, 40],
  });
  const customIcon = isMediumScreen ? customIconLarge : customIconSmall;

  useEffect(() => {
    if (!!ipData) {
      setPosition([ipData.latitude, ipData.longitude]);
    }
  }, [ipData]);

  if (isLoading || !ipData || !position) {
    return (
      <div className="flex flex-grow mx-auto max-w-[90vw]">
        <p className="text-white text-3xl self-center">Loading map</p>
      </div>
    );
  }

  if (ipData?.cityName === "-") {
    return (
      <div className="flex flex-grow mx-auto max-w-[90vw]">
        <p className="text-white text-3xl self-center">
          No location information for ip address {ipData?.ipAddress}
        </p>
      </div>
    );
  }

  return (
    <MapContainer
      key={position.toString()}
      zoomControl={false}
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{
        display: "flex",
        flexGrow: 1,
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={customIcon} position={position} />
    </MapContainer>
  );
};
