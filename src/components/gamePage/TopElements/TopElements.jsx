import React from "react";
import CardGamePage from "./CardGamePage";
import gamesData from "../../../api/gamesData"
import GamePageInfo from "./GamePageInfo";

function TopElementsGamePage() {

  const styles = {
    background: `linear-gradient(180deg, rgba(16,25,36,0.62) 0%, rgba(16,25,36,0.4) 57%, rgba(16,25,36,1) 74%), url(https://images.alphacoders.com/113/thumb-1920-1130234.jpg) no-repeat center center `,
    ObjectFit: "cover",
    backgroundSize: "cover",
  };
  return (
    <div className="topElementsGamePage"  style={styles}>
      <div className="topElementsGamePageBox wrapper">
      <CardGamePage />
      <GamePageInfo />
      </div>

    </div>
  );
}

export default TopElementsGamePage;