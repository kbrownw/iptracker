import { useEffect } from "react";
import { Background } from "./components/Background";
import { Foreground } from "./components/Foreground";
import { useAppContext } from "./context/AppContext";

function App() {
  const { getIPData, getUserIP, userIPAddress, setIsUserIP, isUserIP } =
    useAppContext();

  useEffect(() => {
    setIsUserIP(true);
    getUserIP();
  }, []);

  useEffect(() => {
    if (userIPAddress && isUserIP) {
      getIPData(userIPAddress);
    }
  }, [isUserIP, userIPAddress]);

  return (
    <main className="flex flex-col min-h-[100vh] relative font-Rubik">
      <Background />
      <Foreground />
    </main>
  );
}

export default App;
