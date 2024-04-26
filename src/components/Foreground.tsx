import { InfoContainer } from "./InfoContainer";
import { SearchBox } from "./SearchBox";

export const Foreground = () => {
  return (
    <div className="flex flex-col w-full gap-5 py-3 absolute top-0 left-0 text-center z-[1000] md:gap-14 md:py-8">
      <h1 className="mb-[-10px] text-white text-[22px] font-[500] md:text-[48px] md:mb-[-20px]">
        IP Address Tracker
      </h1>
      <SearchBox />
      <InfoContainer />
    </div>
  );
};
