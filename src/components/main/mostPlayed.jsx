import React from "react";
import gameData from "../../api/gameData";

function MostPlayed() {
  const mostPlayed = gameData.filter((game) => game.type === "TOP DEALS");
  mostPlayed.length = 9;
  return (
    <div className="mostPlayed wrapper">
      <h1>MOST PLAYED</h1>
      <div className="mostPlayed__list">
        {mostPlayed.map((game) => (
          <div className="mostPlayed__item" key={game.id}>
            <img src={game.image} alt="" />
            <h3>{game.title}</h3>
            <p>${game.price}</p>
          </div>
        ))}
      </div>
      <button className="mostPlayedButton">VIEW ALL GAMES</button>;
    </div>
  );
}

export default MostPlayed;
