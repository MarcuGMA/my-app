import React from "react";

function GamePageInfo() {
  return (
    <div className="gamePageInfo">
      <div className="gameInfoImageCarousel">
        <div className="imgBox">
          <div className="imgOverlay"></div>
          <img
            src="https://th.bing.com/th/id/OIP.aN28wlUM1zVXgOqNo0yHmwHaEK?pid=ImgDet&rs=1"
            alt=""
          />
        </div>
        <div className="imgBox">
          <div className="imgOverlay"></div>
          <img
            src="https://geekculture.co/wp-content/uploads/2018/09/Geek-Review-Marvels-Spider-Man-9.jpg"
            alt=""
          />
        </div>
        <div className="imgBox">
          <div className="imgOverlay"></div>
          <img src="https://pbs.twimg.com/media/DVFpKVEUQAAL1Id.jpg" alt="" />
        </div>
        <div className="imgBox">
          <div className="imgOverlay"></div>
          <img
            src="https://th.bing.com/th/id/OIP.tnQC81ty3r7DgdCStP_qYQHaEK?pid=ImgDet&w=1280&h=720&rs=1"
            alt=""
          />
        </div>
      </div>
      <div className="gameInfoText">
        <h1>Spider Man Remasted</h1>
        <div className="aditionalInfo">
          <div className="releaseDate">
            <h3>Release Date:</h3>
            <p>12/12/2020</p>
          </div>
          <div className="gameGenres">
            <p>Casual</p>
            <p>Storyline</p>
            <p>SinglePlayer</p>
          </div>
        </div>
        <div className="gameDescription">
          <p>
            Dezvoltat de Insomniac Games în colaborare cu Marvel și optimizat
            pentru PC de Nixxes Software, Marvel's Spider-Man: Versiunea
            îmbunătățită pe PC prezintă un Peter Parker experimentat care luptă
            împotriva criminalității și a răufăcătorilor celebri în orașul New
            York creat de Marvel. Totodată, el se străduie din greu să păstreze
            echilibrul între viața personală haotică și carieră în timp ce
            soarta orașului New York din universul Marvel atârnă pe umerii lui.
          </p>
        </div>
        <button className="notifyButton">NOTIFY ME</button>
      </div>
    </div>
  );
}

export default GamePageInfo;
