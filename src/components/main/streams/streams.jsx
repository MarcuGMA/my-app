import React from "react";
import CardGame from "./cardGame";
import CardStream from "./cardStream";

function Streams() {
  return (
    <div className="streamsContainer">
      <div className="streamBox">
        <h1>STREAMS</h1>
        <div className="boxStream">
          <div className="streamRow">
            <CardGame />
          </div>
          <div className="streamTwich">
            <CardStream />
            <CardStream />
            <CardStream />
            <CardStream />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Streams;
