import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/about" element={<AboutPage></AboutPage>} />
        <Route path="/settings" element={<SettingsPage></SettingsPage>} />
      </Routes>
    </>
  );
}

export default App;
