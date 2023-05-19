import React from "react";
import gamesData from "../../../api/gameData";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RightCategories() {
  const [selectedItem, setSelectedItem] = useState("TOP SELLERS");

  const populateData = (type) => {
    return gamesData.filter((game) => game.type === type);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
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

  return (
    <div className="rightCategories">
      <div className="headRightCategories">
        <h1>Categories</h1>
        <div className="filters">
          <p>Filters</p>
          <KeyboardArrowDownIcon sx={{ color: "white" }} />
        </div>
      </div>
      <div className="categoriesElements">
        <Category data={populateData(selectedItem)} />
      </div>
    </div>
  );
}

export default RightCategories;
