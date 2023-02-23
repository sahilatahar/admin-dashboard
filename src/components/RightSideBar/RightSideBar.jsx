import React from "react";
import "./RightSideBar.css";
import "../Updates/Updates";
import Updates from "../Updates/Updates";
import CustomerReview from "../CustomerReview/CustomerReview";

const RightSideBar = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Customer Reviews</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSideBar;
