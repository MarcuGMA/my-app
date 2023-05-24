import React, { useState, useEffect, useRef } from "react";
import gamesData from "../../../api/gameData";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuCategories } from "./../../../api/menuCategories";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function RightCategories({ selectedCategory }) {
  const { t } = useTranslation();
  const [dataToShow, setDataToShow] = useState(gamesData);
  const [showFilters, setShowFilters] = useState(false);
  const filtersRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !selectedCategory ||
      selectedCategory === "ALL" ||
      selectedCategory === "TOATE"
    ) {
      return setDataToShow(gamesData);
    }

    setDataToShow(gamesData.filter(({ type }) => type === selectedCategory));
  }, [selectedCategory]);

  const renderCategory = (data) => {
    if (!data) {
      return <h1>No Games data!!!</h1>;
    }

    const handleGameItemClick = (gameId) => {
      localStorage.setItem("gameId", gameId);
      navigate(`/gamePage/${gameId}`);
    };
    
    return (
      <div className="gameListItems">
        {data.map((game) => (
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
  };

  const handleFiltersClick = () => {
    setShowFilters(!showFilters);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filtersRef.current && !filtersRef.current.contains(event.target)) {
        setShowFilters(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="rightCategories">
      <div className="headRightCategories">
        <h1>{t("GAMES")}</h1>
        <div className="filters" onClick={handleFiltersClick} ref={filtersRef}>
          <p>{t("FILTERS")}</p>
          <KeyboardArrowDownIcon sx={{ color: "white" }} />
          {showFilters && (
            <div className="filtersContainer">
              <ul>
                <li>Ascendent</li>
                <li>Descendent</li>
                <li>Price:Low to high</li>
                <li>Price:High to low</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="categoriesElements">{renderCategory(dataToShow)}</div>
    </div>
  );
}

export default RightCategories;
