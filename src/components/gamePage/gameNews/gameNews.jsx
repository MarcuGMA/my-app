import React from "react";
import { useTranslation } from "react-i18next";

function GameNews({game}) {
  const { t } = useTranslation();

  return (
    <div>
      <div className="newsMain wrapper">
        <h1>GAME CONTENT</h1>
        <div className="newsMain__content">
          <div className="content_row">
            <div className="content_row__item">
              <img
                src={game.imageBg1}
                alt=""
              />
              <h3>{t("NEWS")}</h3>
              <h2>{t("Combat")}</h2>
              <p>
               {t("NEWS_1")}
              </p>
            </div>
            <div className="content_row__item">
              <h3>{t("NEWS")}</h3>
              <h2>{t("Graphics")}</h2>
              <p>
              {t("NEWS_1")}
              </p>
            </div>
            <div className="content_row__item">
              <h3>{t("NEWS")}</h3>
              <h2>{t("Music")}</h2>
              <p>
              {t("NEWS_2")}
              </p>
            </div>
          </div>
          <div className="content_row_2">
            <div className="content_row__item">
              <h3>{t("NEWS")}</h3>
              <h2>{t("Villians")}</h2>
              <p>
              {t("NEWS_1")}
              </p>
            </div>
            <div className="content_row__item">
              <img
                src={game.imageBg2}
                alt=""
              />
              <h3>{t("NEWS")}</h3>
              <h2>{t("Main_Caracter")}</h2>
              <p>
              {t("NEWS_2")}
              </p>
            </div>
            <div className="content_row__item">
              <h3>{t("NEWS")}</h3>
              <h2> {t("Top_10_caracters")}</h2>
              <p>
              {t("NEWS_1")}
              </p>
            </div>
          </div>
          <div className="content_row_3">
            <div className="content_row__item">
              <h3>{t("NEWS")}</h3>
              <h2>{t("Side_Caracters")}</h2>
              <p>
              {t("NEWS_2")}
              </p>
            </div>
            <div className="content_row__item">
              <h3>{t("NEWS")}</h3>
              <h2>{t("Storyline")}</h2>
              <p>
              {t("NEWS_1")}
              </p>
            </div>
            <div className="content_row__item">
              <img
                src={game.imageBg3}
                alt=""
              />
              <h3>{t("NEWS")}</h3>
              <h2>{t("Ending")}</h2>
              <p>
              {t("NEWS_2")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameNews;
