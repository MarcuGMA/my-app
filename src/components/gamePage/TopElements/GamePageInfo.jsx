import React from "react";
import { useTranslation } from "react-i18next";

function GamePageInfo({game}) {
  const { t } = useTranslation();

  return (
    <div className="gamePageInfo">
      <div className="gameInfoImageCarousel">
        <div className="imgBox">
          <div className="imgOverlay"></div>
          <img
            src="https://th.bing.com/th/id/OIP.aN28wlUM1zVXgOqNo0yHmwHaEK?pid=ImgDet&rs=1"
            alt=""
          />
        </div>
        <div className="imgBox">
          <div className="imgOverlay"></div>
          <img
            src="https://geekculture.co/wp-content/uploads/2018/09/Geek-Review-Marvels-Spider-Man-9.jpg"
            alt=""
          />
        </div>
        <div className="imgBox">
          <div className="imgOverlay"></div>
          <img src="https://pbs.twimg.com/media/DVFpKVEUQAAL1Id.jpg" alt="" />
        </div>
        <div className="imgBox">
          <div className="imgOverlay"></div>
          <img
            src="https://th.bing.com/th/id/OIP.tnQC81ty3r7DgdCStP_qYQHaEK?pid=ImgDet&w=1280&h=720&rs=1"
            alt=""
          />
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
          <p>
           {t("Game_Description")}
          </p>
        </div>
        <button className="notifyButton">{t("Notify_Me")}</button>
      </div>
    </div>
  );
}

export default GamePageInfo;
