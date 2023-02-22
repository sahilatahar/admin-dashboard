import React, { useState } from "react";
import "./Sidebar.css";
import { FiShoppingBag } from "react-icons/fi";
import { FaSignOutAlt } from "react-icons/fa";
import { SidebarData } from "./Data";

const Sidebar = () => {
  const [selected, setselected] = useState(0);

  return (
    <div className="Sidebar">
      {/* Logo  */}
      <div className="logo">
        <FiShoppingBag className="icon" />
        <span>Shop</span>
      </div>

      {/* Menu */}

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setselected(index)}
            >
              <item.icon className="icon" />
              <span>{item.title}</span>
            </div>
          );
        })}

        <div className="menuItem">
          <FaSignOutAlt className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
