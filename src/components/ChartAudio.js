import React from "react";
import styled from "styled-components";
import "../components/css/chart.css";

function ChartAudio() {
  return (
    <div
      style={{
        height: "1.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}
    >
      <div className="first-chart" />
      <div className="second-chart" />
      <div className="third-chart" />
      <div className="four-chart" />
    </div>
  );
}

export default ChartAudio;
