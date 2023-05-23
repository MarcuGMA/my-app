import React from "react";
import { useTranslation } from "react-i18next";

function NewsMain() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="newsMain wrapper">
        <h1>{t("GAME_NEWS")}</h1>
        <div className="newsMain__content">
          <div className="content_row">
            <div className="content_row__item">
              <img
                src="https://th.bing.com/th/id/OIP.tDeRS9HeebryZwVIpPfPogHaEK?pid=ImgDet&rs=1"
                alt=""
              />
              <h3>{t("NEWS")}</h3>
              <h2>God of War</h2>
              <p>
               {t("NEWS_1")}
              </p>
            </div>
            <div className="content_row__item">
              <h3>{t("NEWS")}</h3>
              <h2>Spider Man</h2>
              <p>
               {t("NEWS_2")}
              </p>
            </div>
            <div className="content_row__item">
              <h3>{t("NEWS")}</h3>
              <h2>Mortal Kombat</h2>
              <p>
                {t("NEWS_1")}
              </p>
            </div>
          </div>
          <div className="content_row_2">
            <div className="content_row__item">
              <h3>{t("NEWS")}</h3>
              <h2>Fifa 23</h2>
              <p>
                {t("NEWS_2")}
              </p>
            </div>
            <div className="content_row__item">
              <img
                src="https://th.bing.com/th/id/R.7578bd819b0908ccf860e4d319499e0a?rik=56xc3UkitnNSog&pid=ImgRaw&r=0"
                alt=""
              />
              <h3>{t("NEWS")}</h3>
              <h2>Hearthstone</h2>
              <p>
                {t("NEWS_1")}
              </p>
            </div>
            <div className="content_row__item">
              <h3>{t("NEWS")}</h3>
              <h2> Warzone</h2>
              <p>
                {t("NEWS_2")}
              </p>
            </div>
          </div>
          <div className="content_row_3">
            <div className="content_row__item">
              <h3>{t("NEWS")}</h3>
              <h2>PUBG</h2>
              <p>
                {t("NEWS_1")}
              </p>
            </div>
            <div className="content_row__item">
              <h3>{t("NEWS")}</h3>
              <h2>CSGO</h2>
              <p>
                {t("NEWS_2")}
              </p>
            </div>
            <div className="content_row__item">
              <img
                src="https://www.indiegamewebsite.com/wp-content/uploads/2020/02/hades-scaled.jpg"
                alt=""
              />
              <h3>{t("NEWS")}</h3>
              <h2>Hades</h2>
              <p>
                {t("NEWS_1")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsMain;
