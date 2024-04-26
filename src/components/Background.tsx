import DesktopBackground from "../assets/images/pattern-bg-desktop.png";
import MobileBackground from "../assets/images/pattern-bg-mobile.png";
import useMediaQuery from "../hooks/useMediaQuery";
import { Map } from "./Map";

export const Background = () => {
  const isMediumScreen = useMediaQuery("(min-width: 770px)");
  return (
    <div className="flex flex-grow flex-col bg-dark-gray">
      <div>
        <img
          className="w-full"
          src={isMediumScreen ? DesktopBackground : MobileBackground}
          alt="Background pattern"
        />
      </div>
      {/* Add map here */}
      <Map />
    </div>
  );
};
