import React from "react";
import GameStatsElement from "./GameStatsELement";

function GameStats() {
  return (
    <div className="gameStats wrapper">
      <h1>GAME STATS</h1>
      <div className="gameStatsContainer">
        <GameStatsElement headerText="34.5H" text="Average time spend" />
        <GameStatsElement headerText="52%" text="Completation Rate" />
        <GameStatsElement headerText="123400" text="Total Players" />
        <GameStatsElement headerText="345" text="Peak players" />
        <GameStatsElement headerText="59%" text="Avchivment" />
        <GameStatsElement headerText="234234" text="Live Players" />
      </div>
    </div>
  );
}

export default GameStats;
