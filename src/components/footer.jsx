import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="footerContainer">
      <div className="footerBox">
        <p>© 2023 Games. {t("rights")}</p>
        <p> {t("Created")}  Marius Gora</p>
        <div className="footerSecond">
          <ul>
            <li>{t("Giveaways")}</li>
            <li>{t("Reviews")}</li>
            <li>{t("Privacy_Policy")}</li>
            <li>{t("Terms_of_Service")}</li>
            <li>{t( "Cookie_Policy")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
