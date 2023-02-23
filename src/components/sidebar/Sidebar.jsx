import React, { useState } from "react";
import "./Sidebar.css";
import { FiShoppingBag } from "react-icons/fi";
import { FaSignOutAlt } from "react-icons/fa";
import { SidebarData } from "../../Data/Data";
import { motion } from "framer-motion";
import { GoThreeBars } from "react-icons/go";

const Sidebar = () => {
  const [selected, setselected] = useState(0);
  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <GoThreeBars />
      </div>
      <motion.div
        className="Sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* Logo  */}
        <div className="logo">
          <FiShoppingBag className="icon" />
          <span>
            Sh<span>o</span>p
          </span>
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
      </motion.div>
    </>
  );
};

export default Sidebar;
