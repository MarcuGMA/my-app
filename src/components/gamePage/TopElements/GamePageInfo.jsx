import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function GamePageInfo({ game,changeImage }) {
  const { t } = useTranslation();

  const [showNotification, setShowNotification] = useState(false);

  const handleNotifyClick = () => {
    setShowNotification(true);
  };

  return (
    <div className="gamePageInfo">
      <div className="gameInfoImageCarousel">
        <div className="imgBox" >
          <img src={game.imageBg1}  onClick={changeImage} alt="" />
          {/* <div className="imgOverlay"></div> */}
        </div>
        <div className="imgBox">
          <img src={game.imageBg2} onClick={changeImage} alt="" />
        </div>
        <div className="imgBox">
          <img src={game.imageBg3} onClick={changeImage} alt="" />
        </div>
        <div className="imgBox">
          <img src={game.imageBg4}  onClick={changeImage}alt="" />
        </div>
      </div>
      <div className="gameInfoText">
        <h1>{game.name}</h1>
        <div className="aditionalInfo">
          <div className="releaseDate">
            <h3>{t("Release_Date")}</h3>
            <p>12/12/2020</p>
          </div>
          <div className="gameGenres">
            <p>Casual</p>
            <p>Storyline</p>
            <p>SinglePlayer</p>
          </div>
        </div>
        <div className="gameDescription">
          <p>{t("Game_Description")}</p>
        </div>
        <button className="notifyButton" onClick={handleNotifyClick}>
          {t("Notify_Me")}
        </button>
      </div>
    </div>
  );
}

export default GamePageInfo;
