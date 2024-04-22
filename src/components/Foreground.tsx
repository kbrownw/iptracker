import { SearchBox } from "./SearchBox";

export const Foreground = () => {
  return (
    <div className="flex flex-col w-full gap-8 py-8 absolute top-0 left-0 text-center">
      <h1 className="text-white text-[48px] font-[500]">IP Address Tracker</h1>
      <SearchBox />
    </div>
  );
};
