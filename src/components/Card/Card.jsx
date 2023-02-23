import React, { useState } from "react";
import "./Card.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { IoMdClose } from "react-icons/io";
import Chart from "react-apexcharts";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpendedCard para={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard para={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

function CompactCard({ para, setExpanded }) {
  const Icon = para.icon;

  return (
    <motion.div
      className="CompactCard"
      style={{
        background: para.color.backGround,
        boxShadow: para.color.boxShadow,
      }}
      onClick={setExpanded}
      layoutId="expendableCard"
    >
      <div className="radialBar">
        <CircularProgressbar value={para.barValue} text={`${para.barValue}%`} />
        <span>{para.title}</span>
      </div>
      <div className="details">
        <Icon className="icon" />
        <span>${para.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
}

function ExpendedCard({ para, setExpanded }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };

  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: para.color.backGround,
        boxShadow: para.color.boxShadow,
      }}
      layoutId="expendableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <IoMdClose onClick={setExpanded} />
      </div>
      <span>{para.title}</span>
      <div className="chartContainer">
        <Chart options={data.options} series={para.series} type="area" />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
}

export default Card;
