import React from "react";
import { ButtonHeader } from "../../buttons";
import { Link } from "react-router-dom";

function CardGame() {
  return (
    <div className="itemGame">
      <img
        src="https://th.bing.com/th/id/R.bc569eb87ff3ae10168dca1a35c752e5?rik=aUaCBGEnsn67HQ&pid=ImgRaw&r=0"
        alt="game"
      />
      <div className="gameName">
        <h2>Overwatch 2</h2>
        <Link to="/gamePage/82">
          <ButtonHeader text="View game" />
        </Link>
      </div>
    </div>
  );
}

export default CardGame;
