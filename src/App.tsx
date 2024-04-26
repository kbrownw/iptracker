import { useEffect } from "react";
import { Background } from "./components/Background";
import { Foreground } from "./components/Foreground";
import { useAppContext } from "./context/AppContext";

function App() {
  const { getIPData, isLoading, ipData } = useAppContext();

  useEffect(() => {
    getIPData();
  }, []);

  useEffect(() => {
    console.log("Loading = ", isLoading);
    if (ipData) {
      console.log(ipData);
    }
  }, [isLoading, ipData]);

  return (
    <main className="flex flex-col min-h-[100vh] relative font-Rubik">
      <Background />
      <Foreground />
    </main>
  );
}

export default App;
