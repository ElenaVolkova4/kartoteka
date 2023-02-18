import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Events from "./components/Events/Events";
import HomePage from "./components/HomePage/HomePage";
import Organizations from "./components/Organizations/Organizations";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="app">
      <div>
        <SideBar />
      </div>
      <div className="content">
        контент
        <Routes>
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/organizations/" element={<Organizations />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
