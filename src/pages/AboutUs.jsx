import React from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import Divider from "../components/helpers/dividing";
import colectionMenuItems123 from "../api/headerMenu";

const AboutUs = () => {
  const platforms = [
    "Steam",
    "Epic Games",
    "Allyouplay",
    "Fanatical",
    "eTail.Market",
    "GamesForPC.net",
    "Wingamestore",
    "JoyBuggy",
    "Green Man Gaming",
    "DreamGame",
    "GamersGate",
    "GOG.com",
    "Microsoft Store",
  ];

  return (
    <>
      <div className="aboutUs wrapper">
        <Header colectionMenuItems={colectionMenuItems123} />
        <Divider />
        <h1 className="aboutHeader">Despre Noi</h1>
        <p className="aboutText">
          Cine suntem noi? Jucători.
          <br />
          <br></br> Ne place să jucăm jocuri pe calculator și să fim implicați
          îndeaproape în lumea jocurilor de noroc. Jocurile sunt pasiunea
          noastră, de aceea am stabilit această platformă pentru a compara și a
          găsi cele mai bune oferte pe jocurile pe care dorim să le jucăm.
          Scopul nostru este de a împărtăși cele mai bune prețuri de joc cu
          comunitatea de jocuri PC. <br />
          <br></br> Bestgameprice.net compară prețurile cheie ale jocurilor
          digitale pentru PC de la magazinele oficiale și distribuitorii
          autorizați. De asemenea, oferim conținut de calitate despre jocuri,
          afișăm fluxurile Twitch, statisticile de joc de care aveți nevoie
          înainte de a cumpăra un joc, cum ar fi istoricul prețurilor, numărul
          de jucători activi și cerințele minime de sistem pentru fiecare joc.
        </p>
        <br />
        <br />
        <h1 className="aboutHeader">
          De ce prețurile noastre sunt super-accesibile?
        </h1>
        <p className="aboutText">
          Ca Bestgameprice.net, misiunea noastră este de a oferi comunității de
          jocuri PC cele mai bune oferte pentru jocuri. Pentru a face acest
          lucru, comparăm prețurile dintr-o varietate de magazine oficiale. Apoi
          analizăm toate prețurile pe care le-am adunat și evidențiem cele mai
          bune oferte. Pe scurt, facem toată munca pentru a economisi bani în
          timp ce ținem pasul cu toate noile tendințe și jocuri din lumea
          jocurilor de noroc.
        </p>
        <br />
        <br />
        <h1 className="aboutHeader">
          Este Bestgameprice.net legitim și de încredere?
        </h1>
        <p className="aboutText">
          Siguranța dvs. Este prioritatea noastră principală. Nu solicităm
          informații suplimentare atunci când vă conectați la Bestgameprice.net
          cu contul de socializare ales de dvs. (Facebook, Google, Reddit,
          Discord, Steam, Google, Google, Google). Battle.net etc.). Nici măcar
          nu trebuie să creați un cont nou special pentru Bestgameprice.net. În
          plus, ne asigurăm că fiecare distribuitor de jocuri digitale cu care
          colaborăm este un magazin oficial și vă oferă o infrastructură de
          cumpărături sigură și asistență de încredere pentru clienți. Dacă mai
          aveți întrebări cu privire la siguranța sau fiabilitatea platformei
          noastre, puteți consulta Politica noastră de confidențialitate și ne
          puteți contacta oricând la information@bestgameprice.net.
        </p>
        <h1 className="aboutHeader">Unde găsești cel mai bun preț de joc?</h1>
        <p className="aboutText">
          Lucrăm cu sârguință și cu pasiune pentru a ne asigura că această
          platformă este principala sursă de comparație a prețurilor în cazul în
          care puteți compara cele mai bune oferte pentru jocuri pe calculator.
          Lucrăm doar cu magazine oficiale și distribuitori autorizați pentru a
          vă arăta cel mai bun preț de joc.
        </p>
        <h1 className="aboutHeader">
          Cele mai bune site-uri pentru a cumpăra jocuri (magazine oficiale și
          distribuitori autorizați)
        </h1>
        <p className="aboutText">
            {platforms.map((platform) => (
                <li>{platform}</li>
            ))}
        </p>
      </div>
        <Footer />
    </>
  );
};

export default AboutUs;
