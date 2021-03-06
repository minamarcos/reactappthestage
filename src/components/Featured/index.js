import React from "react";
import Carrousel from "./Carrousel";
import CountDown from "./CountDown";

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <div className="artist_name">
        <div className="wrapper">Michael Jackson</div>
      </div>
      <Carrousel />
      <CountDown />
    </div>
  );
};

export default Featured;
