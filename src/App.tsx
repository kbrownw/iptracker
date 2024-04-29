import { useEffect } from "react";
import { Background } from "./components/Background";
import { Foreground } from "./components/Foreground";
import { useAppContext } from "./context/AppContext";

function App() {
  const { getIPData } = useAppContext();

  useEffect(() => {
    getIPData();
  }, []);

  return (
    <main className="flex flex-col min-h-[100vh] relative font-Rubik">
      <Background />
      <Foreground />
    </main>
  );
}

export default App;
