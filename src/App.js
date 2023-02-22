import { useContext } from "react";
import { posterContext } from "./context/posterContext";
import Home from "./Pages/Home/Home";
function App() {
  const { state } = useContext(posterContext);
  console.log(state);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
