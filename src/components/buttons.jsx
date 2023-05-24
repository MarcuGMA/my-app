import React from "react";
import { useTranslation } from "react-i18next";

export function AutentifButton({ text, ...props }) {
  return (
    <button type="button" className="autentificationButton" {...props}>
      {text}
    </button>
  );
}

export function ButtonHeader({onClick=()=>{}}) {
  const { t } = useTranslation();
  return <button type="button" className="gameElement-button" onClick={onClick}>{t("VIEW_GAME")}</button>;
}

export function ButtonGames({onClick=()=>{}}) {
  const { t } = useTranslation();
  return <button type="button" className="mostPlayedButton" onClick={onClick}>{t("SEE_ALL")}</button>;
}

export function ButtonGamesInfo({text, ...props}) {
  <button className="mostPlayedButton">{text}</button>;
}
