import React from "react";
import { Header } from "../components";
// import Footer from "../components/footer";
import colectionMenuItems123 from "../api/headerMenu";
import TopElementsGamePage from "../components/gamePage/TopElements/TopElements";
import Wrapper from "../components/helpers/wrapper";

function GamePage() {
  const styles = {
    background: `linear-gradient(180deg, rgba(16,25,36,1) 5%, rgba(16,25,36,0.4) 50%, rgba(16,25,36,1) 85%), url(https://images2.alphacoders.com/976/976068.jpg) no-repeat center center `,
    ObjectFit: "cover",
    backgroundSize: "cover",
  };

  return (
    <div>
      <Header colectionMenuItems={colectionMenuItems123} />
      <TopElementsGamePage styles={styles} />
      <Wrapper />
      {/* <Footer /> */}
    </div>
  );
}

export default GamePage;
