import React from "react";
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
// import { useEffect, useState } from "react";

function GamePage() {
  const styles = {
    background: `linear-gradient(180deg, rgba(16,25,36,1) 5%, rgba(16,25,36,0.4) 50%, rgba(16,25,36,1) 85%), url(https://images2.alphacoders.com/976/976068.jpg) no-repeat center center `,
    ObjectFit: "cover",
    backgroundSize: "cover",
  };

  // const [game, setGame] = useState(null);

  // useEffect(() => {
  //   const gameId = localStorage.getItem("gameId");
  //   if (gameId) {
  //     const selectedGame = gamesData.find((game) => game.id === gameId);
  //     if (selectedGame) {
  //       setGame(selectedGame);
  //     }
  //   }
  // }, [localStorage.getItem("gameId")]);

  return (
    <div>
      <Header colectionMenuItems={colectionMenuItems123} />
      <TopElementsGamePage
        styles={styles}
        // image={game ? game.image : null}
      />
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
