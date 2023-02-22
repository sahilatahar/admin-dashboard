import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";


export default function App() {
  return (
    <div className="App">
      <div className="appGlass">
        <Sidebar />
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
