import React from "react";

function GameStatsElement({ text, headerText }) {
  return (
    <div className="gameStatsElement">
      <h1>{headerText}</h1>
      <p>{text}</p>
    </div>
  );
}

export default GameStatsElement;
