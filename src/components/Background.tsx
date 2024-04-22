import DesktopBackground from "../assets/images/pattern-bg-desktop.png";
import { Map } from "./Map";

export const Background = () => {
  return (
    <div className="flex flex-grow flex-col bg-dark-gray">
      <div>
        <img
          className="w-full"
          src={DesktopBackground}
          alt="Background pattern"
        />
      </div>
      {/* Add map here */}
      <Map />
    </div>
  );
};
