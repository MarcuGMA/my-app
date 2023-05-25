import React, { useEffect, useState } from "react";
import CardGamePage from "./CardGamePage";
import gamesData from "../../../api/gameData";
import GamePageInfo from "./GamePageInfo";

function TopElementsGamePage({ game }) {
  const [selectedImage, setSelectedImage] = useState(game.imageBg);

  const changeImage = (e) => {
    setSelectedImage(e.target.src);
    console.log(e.target.src);
  };


  const styles = {
    background: `linear-gradient(180deg, rgba(16,25,36,0.62) 0%, rgba(16,25,36,0.4) 57%, rgba(16,25,36,1) 74%), url(${selectedImage}) no-repeat center center`,
    objectFit: "cover",
    backgroundSize: "cover",
  };

  return (
    <div className="topElementsGamePage" style={styles}>
      <div className="topElementsGamePageBox wrapper">
        <CardGamePage game={game} />
        <GamePageInfo game={game} changeImage={changeImage} />
      </div>
    </div>
  );
}

export default TopElementsGamePage;
