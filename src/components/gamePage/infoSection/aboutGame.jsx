import React from "react";
import { useTranslation } from "react-i18next";

function InfoSection() {
  const { t } = useTranslation();

  return (
    <div className="aboutGames">
      <h1>{t("About_Game")}</h1>
      <p>
       {t("Section_1")}
      </p>
      <p>
        {t("Section_2")}
      </p>
    </div>
  );
}

export default InfoSection;
