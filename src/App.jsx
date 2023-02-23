import React from "react";
import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import Sidebar from "./components/sidebar/Sidebar";

export default function App() {
  return (
    <div className="App">
      <div className="appGlass">
        <Sidebar />
        <MainDash />
        <div></div>
      </div>
    </div>
  );
}
