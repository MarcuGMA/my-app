import React from "react";
import { useState } from "react";
import gamesData from "../../api/gameData";
// import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ButtonGames } from "../buttons";

function GameList() {
  const { t } = useTranslation();
  const [selectedItem, setSelectedItem] = useState("TOP SELLERS");

  const navigate = useNavigate();

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleGameItemClick = (id) => {
    navigate(`/gamePage/${id}`);
  };

  const populateData = (type) => {
    return gamesData.filter((game) => game.type === type);
  };

  const Category = (data) => {
    console.log(data);
    if (data) {
      return (
        <div className="gameListItems">
          {data.data.map((game) => (
            <div
              className="gameListItem"
              key={game.id}
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
                  <span className="spanInfo">{t("FROM")}</span>
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
              {t("TOP_SELLERS")}
            </li>
            <li
              className={selectedItem === "TOP DEALS" ? "selected" : ""}
              onClick={() => handleItemClick("TOP DEALS")}
            >
              {t("TOP_DEALS")}
            </li>
            <li
              className={selectedItem === "NEW RELEASES" ? "selected" : ""}
              onClick={() => handleItemClick("NEW RELEASES")}
            >
              {t("NEW_RELEASE")}
            </li>
            <li
              className={selectedItem === "FREE TO PLAY" ? "selected" : ""}
              onClick={() => handleItemClick("FREE TO PLAY")}
            >
              {t("FREE_TO_PLAY")}
            </li>
          </ul>
          <Category data={populateData(selectedItem)} />
          <Link to="/categories">
          <ButtonGames />
          </Link>
        </div>
        <div className="gameListAditional">
          <h2>{t("CHEAP_GAMES")}</h2>
          <div className="gameListAditionalItems">
            {cheapGames.map((game) => (
              <div
                className="gameListAditionalItem"
                key={game.id}
                onClick={() => handleGameItemClick(game.id)}
              >
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
