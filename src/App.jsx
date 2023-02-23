import React from "react";
import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import RightSideBar from "./components/RightSideBar/RightSideBar";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RightSideBar />
      </div>
    </div>
  );
}
