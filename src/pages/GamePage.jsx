import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components";
import Footer from "../components/footer";

import TopElementsGamePage from "../components/gamePage/TopElements/TopElements";
import Wrapper from "../components/helpers/wrapper";
import GameStats from "../components/gamePage/GameStats/GameStats";
import GameNews from "../components/gamePage/gameNews/gameNews";
import GameQuestions from "../components/gamePage/GameQuestions/GameQuestions";
import InfoSection from "../components/gamePage/infoSection/infoSection";
import CommentSection from "../components/gamePage/CommentsSection/CommentSection";
import gamesData from "../api/gameData";
import ProgressCircle from "../components/materialui/ProgressCircle";

function GamePage() {
  const { id } = useParams();
  const gameId = Number(id);

  const [game, setGame] = useState(null);

  useEffect(() => {
    if (!gameId) {
      return;
    }

    const selectedGame = gamesData.find((game) => game.id === gameId);

    if (selectedGame) {
      setGame(selectedGame);
    }
  }, [gameId]);

  if (!game) {
    return <ProgressCircle />;
  }

  const notification = () => {  
    return (
    <InfoNotification/>
    )
  }

  return (
    <div>
      <Header />
      <TopElementsGamePage game={game} />
      <Wrapper />
      <GameStats />
      <GameNews game={game} />
      <Wrapper />
      <GameQuestions />
      <Wrapper />
      <InfoSection />
      <Wrapper />
      <CommentSection />
      <Footer />
    </div>
  );
}

export default GamePage;
