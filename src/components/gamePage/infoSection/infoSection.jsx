import React from "react";
import Requirements from "./requirements";
import AboutGame from "./aboutGame";

function InfoSection() {
  return (
    <div className="infoSection wrapper">
      <AboutGame />
      <Requirements />
    </div>
  );
}

export default InfoSection;
