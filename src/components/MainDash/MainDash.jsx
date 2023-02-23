import React from "react";
import Table from "../Table/Table";
import Cards from "../Cards/Cards";
import "./MainDash.css";

const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <div className="parentContainer">
        <Cards />
      </div>
      <Table />
    </div>
  );
};

export default MainDash;
