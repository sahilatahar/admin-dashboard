import React from "react";
import Table from "../Table/Table";
import Cards from "../Cards/Cards";
import "./MainDash.css";

const MainDash = () => {
  return (
    <div className="MainDash">
      <div className="parentContainer">
        <h1>Dashboard</h1>
        <Cards />
      </div>
      <Table />
    </div>
  );
};

export default MainDash;
