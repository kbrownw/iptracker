import { useAppContext } from "../context/AppContext";

export const Map = () => {
  const { isLoading } = useAppContext();
  const test = true;

  if (test) {
    return (
      <div className="flex flex-grow items-center justify-center">
        <p className="text-2xl text-black">Loading map...</p>
      </div>
    );
  }
};
