import React from "react";
import gameData from "../../api/gameData";
import { useNavigate } from "react-router-dom";

function MostPlayed() {
  const mostPlayed = gameData.filter((game) => game.type === "TOP DEALS");
  mostPlayed.length = 9;
  const navigate = useNavigate();

  const handleGameItemClick = (id) => {
    localStorage.setItem("gameId", id);
    navigate(`/gamePage/${id}`);

  };

  return (
    <div className="mostPlayed wrapper">
      <h1>MOST PLAYED</h1>
      <div className="mostPlayed__list">
        {mostPlayed.map((game) => (
          <div
            className="mostPlayed__item"
            key={game.id}
            onClick={() => handleGameItemClick(game.id)}
          >
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
