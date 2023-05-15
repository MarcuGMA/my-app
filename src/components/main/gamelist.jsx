import React from "react";
import { useState } from "react";
import gamesData from "../../api/gameData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function GameList () {
  const [selectedItem, setSelectedItem] = useState("TOP SELLERS");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const populateData = (type) => {
    // switch (type) {
    //   case "TOP SELLERS":
    //     return gamesData.filter((game) => game.type === type);
    //   case "TOP DEALS":
    //     return gamesData.filter((game) => game.topDeal);
    //   case "NEW RELEASES":
    //     return gamesData.filter((game) => game.newRelease);
    //   case "FREE TO PLAY":
    //     return gamesData.filter((game) => game.freeToPlay);
    //   default:
    //     return [];
    // }
    return gamesData.filter((game) => game.type === type);
  }

  const Category = (data) => {
    console.log(data);
    if (data) {
    return <div className="gameListItems">
    {data.data.map((game) => (
       <div className="gameListItem">
         <img src={game.image} alt={game.name} />
         <div className="gameListItemInfo">
          <div className="itemInfoLeft">
            <h3>{game.name}</h3>
            <div className="iconsInfo">
              <FontAwesomeIcon icon="star" />
            </div>
          </div>
          <div className="itemInfoRight">
            <p>${game.price}</p>
            <span className="spanInfo">from</span>  
          </div>
         </div>
       </div>
     ))
    }
   </div>
  }  return console.log(populateData(selectedItem));
}


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
                      TOP SELLERS</li>
                    <li
                     className={selectedItem === "TOP DEALS" ? "selected" : ""}
                     onClick={() => handleItemClick("TOP DEALS")}
                    >
                      TOP DEALS</li>
                    <li
                       className={selectedItem === "NEW RELEASES" ? "selected" : ""}
                       onClick={() => handleItemClick("NEW RELEASES")}
                    >
                      NEW RELEASES</li>
                    <li
                     className={selectedItem === "FREE TO PLAY" ? "selected" : ""}
                     onClick={() => handleItemClick("FREE TO PLAY")}
                    >
                      FREE TO PLAY</li>
                </ul>
                <Category data={populateData(selectedItem)} />
              </div>
              <div className="gameListAditional">
                <h2>CHEAP GAMES</h2>
                <div className="gameListAditionalItems">
                 {cheapGames.map((game) => (
                    <div className="gameListAditionalItem">
                      <img src={game.image} alt={game.name} />
                      <div className="gameListAditionalItemInfo">
                        <p>${game.price}</p>
                      </div>
                    </div>
                  ))
                 }
                </div>
              </div>
        </div>
    </div>
  );
}

export default GameList;