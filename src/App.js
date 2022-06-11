import "./App.css";
import Home from "./components/Home";
import World from "./components/World";
import Business from "./components/Business";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="world" element={<World />} />
        <Route path="business" element={<Business />} />
        {/* <Route path="world" element={<World />} />
        <Route path="world" element={<World />} />
        <Route path="world" element={<World />} /> */}
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
