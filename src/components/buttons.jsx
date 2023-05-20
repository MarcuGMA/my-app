import React from "react";

export function AutentifButton({ text, ...props }) {
  return (
    <button type="button" className="autentificationButton" {...props}>
      {text}
    </button>
  );
}

export function ButtonHeader({onClick=()=>{}}) {
  return <button type="button" className="gameElement-button" onClick={onClick}>VIEW GAME</button>;
}

export function ButtonGamesInfo({text, ...props}) {
  <button className="mostPlayedButton">{text}</button>;
}
