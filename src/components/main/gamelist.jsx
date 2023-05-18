import React from "react";
import { useState } from "react";
import gamesData from "../../api/gameData";
// import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function GameList() {
  const [selectedItem, setSelectedItem] = useState("TOP SELLERS");

  const navigate = useNavigate();
  
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  // const handleGameItemClick = (id) => {
  //   localStorage.setItem("gameId", id);
  //   navigate(`/game/${id}`);

  // };

  const populateData = (type) => {
    return gamesData.filter((game) => game.type === type);
  };

  const Category = (data) => {
    console.log(data);
    if (data) {
      return (
        <div className="gameListItems">
          {data.data.map((game) => (
            <div className="gameListItem" key={game.id}
            onClick={() => handleGameItemClick(game.id)}
            >
              <img src={game.image} alt={game.name} />
              <div className="gameListItemInfo">
                <div className="itemInfoLeft">
                  <h3>{game.name}</h3>
                  <div className="iconsInfo">
                    <FontAwesomeIcon icon="star" />
                  </div>
                </div>
                <div className="itemInfoRight">
                  <p>{game.price}</p>
                  <span className="spanInfo">from</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
    return console.log(populateData(selectedItem));
  };

  const cheapGames = gamesData.filter((game) => game.price < 10);

  return (
    <div>
      <div className="gameListContainer">
        <div className="gameList">
          <ul className="listGames">
            <li
              className={selectedItem === "TOP SELLERS" ? "selected" : ""}
              onClick={() => handleItemClick("TOP SELLERS")}
            >
              TOP SELLERS
            </li>
            <li
              className={selectedItem === "TOP DEALS" ? "selected" : ""}
              onClick={() => handleItemClick("TOP DEALS")}
            >
              TOP DEALS
            </li>
            <li
              className={selectedItem === "NEW RELEASES" ? "selected" : ""}
              onClick={() => handleItemClick("NEW RELEASES")}
            >
              NEW RELEASES
            </li>
            <li
              className={selectedItem === "FREE TO PLAY" ? "selected" : ""}
              onClick={() => handleItemClick("FREE TO PLAY")}
            >
              FREE TO PLAY
            </li>
          </ul>
          <Category data={populateData(selectedItem)} />
        </div>
        <div className="gameListAditional">
          <h2>CHEAP GAMES</h2>
          <div className="gameListAditionalItems">
            {cheapGames.map((game) => (
              <div className="gameListAditionalItem" key={game.id} onClick={() => handleGameItemClick(game.id)}>
                <img src={game.image} alt={game.name} />
                <div className="gameListAditionalItemInfo">
                  <p>${game.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameList;
