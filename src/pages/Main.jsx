import React from "react";
import { Header } from "../components";
import { ButtonHeader } from "../components/buttons";
import { MySwiper } from "../components/Carousel";
import Wrapper from "../components/helpers/wrapper";
import GameList from "../components/main/gamelist";
import Streams from "../components/main/streams/streams";
import Footer from "../components/footer";
import NewsMain from "../components/main/newsMain";
import MostPlayed from "../components/main/mostPlayed";
import TrendGame from "../components/main/trendGame";
import { Link, useNavigate } from "react-router-dom";
import colectionMenuItems123 from "../api/headerMenu";

function Main() {
  const navigate = useNavigate();

  const styles = {
    background: `linear-gradient(180deg, rgba(16,25,36,1) 5%, rgba(16,25,36,0.4) 50%, rgba(16,25,36,1) 85%), url(https://images2.alphacoders.com/976/976068.jpg) no-repeat center center `,
    ObjectFit: "cover",
    backgroundSize: "cover",
  };

  const onHeaderButtonClick = () => {
    navigate("/gamePage/74");
  };

  return (
    <div className="home-page">
      <Header colectionMenuItems={colectionMenuItems123} />
      <div className="topElements" style={styles}>
        <img src="/public/media/images/gow.jpg" alt="" />
        <div className="wrapper">
          <div className="topGame">
            <h1>God of War</h1>
            <p>Free</p>
            <ButtonHeader onClick={onHeaderButtonClick} />
          </div>
        </div>
        <MySwiper />
      </div>
      <Wrapper />
      <GameList />
      <Streams />
      <Wrapper />
      <NewsMain />
      <Wrapper />
      <MostPlayed />
      <Wrapper />
      <TrendGame />
      <Footer />
    </div>
  );
}

export default Main;
