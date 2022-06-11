import "./App.css";
import Home from "./components/Home";
import World from "./components/World";
import Business from "./components/Business";
import Technology from "./components/Technology";
import Entertainment from "./components/Entertainment";
import Sports from "./components/Sports";
import Science from "./components/Science";
import Health from "./components/Health";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="world" element={<World />} />
        <Route path="business" element={<Business />} />
        <Route path="tech" element={<Technology />} />
        <Route path="entertainment" element={<Entertainment />} />
        <Route path="sports" element={<Sports />} />
        <Route path="science" element={<Science />} />
        <Route path="health" element={<Health />} />
      </Routes>
    </div>
  );
}

/* <p>Top</p>
          <p>World</p>
          <p>Business</p>
          <p>Technology</p>
          <p>Entertainment</p>
          <p>Sports</p>
          <p>Science</p>
          <p>Health</p> */

export default App;
