import React from "react";
import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Events from "./components/Events/Events";
import HomePage from "./components/HomePage/HomePage";
import Organizations from "./components/Organizations/Organizations";
import SideBar from "./components/SideBar/SideBar";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function App() {
  const [nav, setNav] = useState(false);

  return (
    <div className="app">
      <div>
        <SideBar />
        <div className="mobile_btn" onClick={() => setNav(!nav)}>
          {nav ? (
            <div>
              <AiOutlineClose size={30} /> <SideBar active="sideBar_active" />
            </div>
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </div>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/organizations" element={<Organizations />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
