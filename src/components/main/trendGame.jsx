import React from "react";
import gameData from "../../api/gameData";

function TrendGame() {
  const gameTitles = gameData.filter((game) => game.name);
  gameTitles.length = 12;
 
  const randomNumbers = Array.from(
    { length: 12 },
    () => Math.floor(Math.random() * (500000 - 100000 + 1)) + 100000
  );

  return (
    <div className="trendGame">
      <h1>WHAT'S EVERYONE PLAYING?</h1>
      <div className="trendGameContainer">
        <div className="gameContainer">
          <img
            src="https://cdn.videogamesblogger.com/wp-content/uploads/2022/09/fifa-23-cheats.jpg"
            alt=""
          />
          <div className="gameInfo">
            <div className="curentPlayers">
              <p>23.423</p>
              <span>Curent Players</span>
            </div>
            <div className="curentPlayers">
              <p>534.342</p>
              <span>Curent Peak</span>
            </div>
          </div>
        </div>
        <div className="listContainer">
          <div className="trendListGames">
            <h3>GAME</h3>
            <ul>
              {gameTitles.map((game) => (
                <li key={game.id}>{game.name}</li>
              ))}
            </ul>
          </div>
          <div className="trendCurrentPlayers">
            <h3>CURRENT PLAYERS</h3>
            <ul>
              {randomNumbers.map((number) => (
                <li >{number}</li>
              ))}
            </ul>
          </div>
          <div className="trendPeak">
          <h3>TREND PEAK</h3>
            <ul>
              {randomNumbers.map((number) => (
                <li >{number}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendGame;
