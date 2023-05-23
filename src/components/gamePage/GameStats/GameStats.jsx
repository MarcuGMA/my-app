import React from "react";
import GameStatsElement from "./GameStatsELement";
import { useTranslation } from "react-i18next";

function GameStats() {
  const { t } = useTranslation();

  return (
    <div className="gameStats wrapper">
      <h1>{t("Game_Stats")}</h1>
      <div className="gameStatsContainer">
        <GameStatsElement headerText="34.5H" text={t("Text_Game_Stats_2")}  />
        <GameStatsElement headerText="52%" text={t("Text_Game_Stats_1")} />
        <GameStatsElement headerText="123400" text={t("Text_Game_Stats_3")}  />
        <GameStatsElement headerText="345" text={t("Text_Game_Stats_4")}  />
        <GameStatsElement headerText="59%" text={t("Text_Game_Stats_5")}  />
        <GameStatsElement headerText="234234" text={t("Text_Game_Stats_6")}  />
      </div>
    </div>
  );
}

export default GameStats;
