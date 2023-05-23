import React from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import Divider from "../components/helpers/dividing";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  const platforms = [
    "Steam",
    "Epic Games",
    "Allyouplay",
    "Fanatical",
    "eTail.Market",
    "GamesForPC.net",
    "Wingamestore",
    "JoyBuggy",
    "Green Man Gaming",
    "DreamGame",
    "GamersGate",
    "GOG.com",
    "Microsoft Store",
  ];

  return (
    <>
      <div className="aboutUs wrapper">
        <Header />
        <Divider />
        <h1 className="aboutHeader">{t("About_Us")}</h1>
        <p className="aboutText">
          {t("We_Are")}
          <br />
          <br></br> {t("We_Are_1")} <br />
          <br></br> {t("We_Are_2")} <br />
        </p>
        <br />
        <br />
        <h1 className="aboutHeader">{t("About_Q1")}</h1>
        <p className="aboutText">{t("About_A1")}</p>
        <br />
        <br />
        <h1 className="aboutHeader">{t("About_Q2")}</h1>
        <p className="aboutText">{t("About_A2")}</p>
        <h1 className="aboutHeader">{t("About_Q3")}</h1>
        <p className="aboutText">{t("About_A3")}</p>
        <h1 className="aboutHeader">{t("About_Q4")}</h1>
        <p className="aboutText">
          {platforms.map((platform) => (
            <li>{platform}</li>
          ))}
        </p>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
