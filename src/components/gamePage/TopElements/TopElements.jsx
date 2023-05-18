import React, { useEffect, useState } from "react";
import CardGamePage from "./CardGamePage";
import gamesData from "../../../api/gameData";
import GamePageInfo from "./GamePageInfo";

function TopElementsGamePage() {
  const [game, setGame] = useState(null);

  const styles = {
    background: `linear-gradient(180deg, rgba(16,25,36,0.62) 0%, rgba(16,25,36,0.4) 57%, rgba(16,25,36,1) 74%), url(https://images.alphacoders.com/113/thumb-1920-1130234.jpg) no-repeat center center `,
    objectFit: "cover",
    backgroundSize: "cover",
  };

  // useEffect(() => {
  //   const gameId = localStorage.getItem("gameId");
  //   if (gameId) {
  //     const selectedGame = gamesData.find((game) => game.id === gameId);
  //     if (selectedGame) {
  //       setGame(selectedGame);
  //     }
  //   }
  // }, [localStorage.getItem("gameId")]);

  return (
    <div className="topElementsGamePage" style={styles}>
      <div className="topElementsGamePageBox wrapper">
        {/* {game ? (
          <CardGamePage image={game.image} />
        ) : ( */}
          <CardGamePage />
        {/* )}  */}
        <GamePageInfo />
      </div>
    </div>
  );
}

export default TopElementsGamePage;
