import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Header } from "../components";
import Footer from "../components/footer";
import colectionMenuItems123 from "../api/headerMenu";
import TopElementsGamePage from "../components/gamePage/TopElements/TopElements";
import Wrapper from "../components/helpers/wrapper";
import GameStats from "../components/gamePage/GameStats/GameStats";
import GameNews from "../components/gamePage/gameNews/gameNews";
import GameQuestions from "../components/gamePage/GameQuestions/GameQuestions";
import InfoSection from "../components/gamePage/infoSection/infoSection";
import CommentSection from "../components/gamePage/CommentsSection/CommentSection";
import gamesData from "../api/gameData";

function GamePage() {
  const { id } = useParams();
  const gameId = Number(id);

  const [game, setGame] = useState(null);

  useEffect(() => {
    if (!gameId) {
      return ;
    }

    const selectedGame = gamesData.find((game) => game.id === gameId);

    if (selectedGame) {
      setGame(selectedGame);
  }
  }, [gameId]);

 if(!game) {
  return <h1>Please wait ....</h1>
 }

  return (
    <div>
      <Header colectionMenuItems={colectionMenuItems123} />
      <TopElementsGamePage game={game} />
      <Wrapper />
      <GameStats />
      <GameNews />
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
