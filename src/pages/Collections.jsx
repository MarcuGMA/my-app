import React from "react";
import { Header } from "../components";
import colectionMenuItems123 from "../api/headerMenu";
import Divider from "../components/helpers/dividing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Wrapper from "../components/helpers/wrapper";
import Footer from "../components/footer";

function Collections() {
  return (
    <>
      <div className="collectionContainer wrapper">
        <Header colectionMenuItems={colectionMenuItems123} />
        <Divider />
        <h1 className="collectionHeader">
          Jocuri amuzante care te vor face să râzi
        </h1>
        <p className="collectionText">
          Vrei ceva mai mult decât strategia ta obișnuită și jocurile de luptă?
          Cauți ceva care să aibă mult umor? Iată o listă de jocuri de top
          pentru PC care vă vor face să zâmbiți și chiar să râdeți! Aceste
          jocuri oferă o gamă largă de puzzle-uri amuzante și provocatoare,
          precum și personaje wacky. Jocurile video sunt o modalitate foarte
          bună de a vă relaxa după o zi grea. Uneori, s-ar putea să doriți ceva
          mai ușor și mai amuzant pentru a distrage atenția de la lucrurile
          serioase. Avem doar colectia pentru tine! Relaxați-vă, distrați-vă și
          bucurați-vă de câteva râsete!
        </p>
        <h1 className="collectionHeader">
          Top 5 Jocuri cu cel mai ciudat simț al umorului
        </h1>
        <p className="collectionText">
          <li>Goat Simulator</li>
          <li>High Of Life</li>
          <li>I am a bread</li>
          <li>Portal 2</li>
          <li>BuzzPunk</li>
        </p>
        <h1 className="collectionHeader">Saints Row: The Third</h1>
        <p className="collectionText">
          Saints Row: The Third oferă un amestec neobișnuit de umor absurd și
          acțiune cu mize mari. Sfinții de pe Strada a treia se află într-o
          încercare de a cuceri lumea. Aici, jucătorul va fi aruncat în haos și
          distracție plină de crime. Saints Row: Al treilea te va distra cu
          poveștile sale absurde, personaje hilare și dialog nebun.
        </p>
        <div className="gameListItem">
          <img
            src="https://th.bing.com/th/id/R.57533324317592f04831a535ff74015a?rik=MiDM80tipmXw0w&riu=http%3a%2f%2fgearnuke.com%2fwp-content%2fuploads%2f2014%2f05%2fSaints-Row-The-Third.jpg&ehk=iLz7CupbX%2b6svNBxcDbtRYPCHWMkN0sF6ickL2AvCBc%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
          <div className="gameListItemInfo">
            <div className="itemInfoLeft">
              <h3>Saints Row: The Third </h3>
              <div className="iconsInfo">
                <FontAwesomeIcon icon="star" />
              </div>
            </div>
            <div className="itemInfoRight">
              <p>9,99 €</p>
              <span className="spanInfo">from</span>
            </div>
          </div>
        </div>
        <h1 className="collectionHeader">Goat Simulator</h1>
        <p className="collectionText">
          Goat Simulator vă permite să jucați ca o capră și să provocați haos
          într-un mediu open-World. Puteți efectua manevre de cascadorii sau
          provoca haos într-un oraș, iar jocul are multe elemente amuzante și
          bizare. Lumea Goat Simulator permite jucătorilor să vină cu scenarii
          și mai nebunești. Umorul jocului stă în absurditatea sa. Jucătorii se
          vor afla în situații ridicole și vor trebui să îndeplinească sarcini
          scandaloase.
        </p>
        <div className="gameListItem">
          <img
            src="https://th.bing.com/th/id/R.c9c086ce602b981a18104029cb386222?rik=4UL3SU61zMgAPw&riu=http%3a%2f%2fmegagames.com%2fsites%2fdefault%2ffiles%2fgame-images%2fgoat.png&ehk=OJu3ziDHqCG7ffBgh22aqpgqtc32QFpawOaksEv4yd0%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
            alt=""
          />
          <div className="gameListItemInfo">
            <div className="itemInfoLeft">
              <h3>Goat Simulator </h3>
              <div className="iconsInfo">
                <FontAwesomeIcon icon="star" />
              </div>
            </div>
            <div className="itemInfoRight">
              <p>12,99 €</p>
              <span className="spanInfo">from</span>
            </div>
          </div>
        </div>
        <Divider />
        <img
          className="previewImageCollection"
          src="https://th.bing.com/th/id/R.dbd66cba391cfb638341b4186272ffdd?rik=KJoZYZ4%2bL31ApA&riu=http%3a%2f%2fimages.pushsquare.com%2fscreenshots%2f70852%2flarge.jpg&ehk=Up2J0EQeJ9qutSsPJbHF0GZsPJ0Ondh4FUa7Beq9KKc%3d&risl=&pid=ImgRaw&r=0"
          alt=""
        />
        <Wrapper />
        <h1 className="collectionHeader">High of Life</h1>
        <p className="collectionText">
          Justin Roiland, co-creatorul lui Rick and Morty, este autorul cărții
          High on Life. Un cartel de droguri care vrea să le exploateze ca
          droguri încearcă să pună în pericol omenirea. Mai ales dacă sunteți
          familiarizați cu simțul umorului al creatorilor de la Rick și Morty
          sau alte lucrări ale sale, acest joc este absolut hilar. Există
          momente amuzante în tot haosul verbal. O zonă are un gag care se
          învârte în jurul mamelor împotriva violenței. Această organizație face
          o sarcină mai bună de a face umoristic reiterarea întâmplătoare a lui
          Roiland în același punct
        </p>
        <div className="gameListItem">
          <img
            src="https://twinfinite.net/wp-content/uploads/2022/06/high-on-life.jpg"
            alt=""
          />
          <div className="gameListItemInfo">
            <div className="itemInfoLeft">
              <h3>High of Life</h3>
              <div className="iconsInfo">
                <FontAwesomeIcon icon="star" />
              </div>
            </div>
            <div className="itemInfoRight">
              <p>2,99 €</p>
              <span className="spanInfo">from</span>
            </div>
          </div>
        </div>
        <Divider />
        <img
          className="previewImageCollection"
          src="https://www.nme.com/wp-content/uploads/2022/06/High-On-Life-E3-2022.jpg"
          alt=""
        />
        <Wrapper />
        <h1 className="collectionHeader">I am Bread</h1>
        <p className="collectionText">
          I am Bread este un joc ridicol de absurd în care joci ca o pâine
          într-o misiune de a face pâine prăjită. Cu ajutorul unor controale
          bazate pe fizică, navigați printr-o casă pentru a găsi un prăjitor de
          pâine. Trebuie să evitați obstacolele, cum ar fi apa și mucegaiul.
          Pâinea mea va aduce multe râsete oricui o va cânta.
        </p>
        <div className="gameListItem">
          <img
            src="https://th.bing.com/th/id/OIP.AWo7aRZuIcgBJ2CA0wo5pQHaEK?pid=ImgDet&rs=1"
            alt=""
          />
          <div className="gameListItemInfo">
            <div className="itemInfoLeft">
              <h3>I am Bread</h3>
              <div className="iconsInfo">
                <FontAwesomeIcon icon="star" />
              </div>
            </div>
            <div className="itemInfoRight">
              <p>4,99 €</p>
              <span className="spanInfo">from</span>
            </div>
          </div>
        </div>
        <h1 className="collectionHeader">JazzPunk</h1>
        <p className="collectionText">
          Jazzpunk, un joc video despre comedie și aventură, îi duce pe jucători
          într-o călătorie absurd de amuzantă. Combinația unică a jocului de
          efecte vizuale retro-futuriste, personaje ciudate și umor absurd îl
          face să iasă în evidență. De la infiltrarea în laboratoare secrete
          până la participarea la o noapte de joc găzduită de o pisică
          zburătoare gigantică, jucătorii pot descoperi o gamă largă de situații
          hilare și bizare. Jazzpunk va oferi divertisment și râs pentru toate
          vârstele, cu umorul său ciudat și imagini suprarealiste.
        </p>
        <div className="gameListItem">
          <img
            src="https://th.bing.com/th/id/R.78cb576c38cb08d2fe0fd9c0d779ac79?rik=6OLk9TBEUjkVsA&riu=http%3a%2f%2fcdn.pastemagazine.com%2fwww%2farticles%2fjazzpunk+screen+2.jpg&ehk=aDZDuNmVTyCKFEUzSK%2fhPJ24T920CHAExocpot5NB9M%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
          <div className="gameListItemInfo">
            <div className="itemInfoLeft">
              <h3>JazzPunk</h3>
              <div className="iconsInfo">
                <FontAwesomeIcon icon="star" />
              </div>
            </div>
            <div className="itemInfoRight">
              <p>4,99 €</p>
              <span className="spanInfo">from</span>
            </div>
          </div>
        </div>
      </div>
        <Footer />
    </>
  );
}

export default Collections;
