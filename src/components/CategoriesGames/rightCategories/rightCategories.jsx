import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import gamesData from "../../../api/gameData";
import { MenuCategories } from "./../../../api/menuCategories";


function RightCategories({ selectedCategory }) {
  const { t } = useTranslation();
  const [dataToShow, setDataToShow] = useState(gamesData);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");
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

  const handleFiltersItemClick = (filter) => {
    setSelectedFilter(filter);
    setShowFilters(false);
  };

  const filterData = (data) => {
    if (!data) {
      return;
    }
  
    if (selectedFilter === "Ascendent") {
      return [...data].sort((a, b) => a.price - b.price);
    }
  
    if (selectedFilter === "Descendent") {
      return [...data].sort((a, b) => b.price - a.price);
    }
  
    if (selectedFilter === "Price:Low to high") {
      return [...data].sort((a, b) => a.price - b.price);
    }
  
    if (selectedFilter === "Price:High to low") {
      return [...data].sort((a, b) => b.price - a.price);
    }
  
    return data;
  };
  

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
                <li onClick={() => handleFiltersItemClick("Ascendent")}>
                  Ascendent
                </li>
                <li onClick={() => handleFiltersItemClick("Descendent")}>
                  Descendent
                </li>
                <li onClick={() => handleFiltersItemClick("Price:Low to high")}>
                  Price:Low to high
                </li>
                <li onClick={() => handleFiltersItemClick("Price:High to low")}>
                  Price:High to low
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="categoriesElements">
        {filterData(renderCategory(dataToShow))}
      </div>
    </div>
  );
}

export default RightCategories;
