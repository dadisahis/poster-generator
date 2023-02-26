import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { posterContext } from "./context/posterContext";
import Home from "./Pages/Home/Home";
import Themes from "./Pages/Themes/Themes";
function App() {
  const { state } = useContext(posterContext);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/themes" element={<Themes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
