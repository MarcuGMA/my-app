import React from "react";
import CardGame from "./cardGame";
import CardStream from "./cardStream";
import { useTranslation } from "react-i18next";

function Streams() {
  const { t } = useTranslation();

  return (
    <div className="streamsContainer">
      <div className="streamBox">
        <h1>{t("STREAMS")}</h1>
        <div className="boxStream">
          <div className="streamRow">
            <CardGame />
          </div>
          <div className="streamTwich">
            <CardStream />
            <CardStream />
            <CardStream />
            <CardStream />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Streams;
