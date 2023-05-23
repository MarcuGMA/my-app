import React from "react";
import { Header } from "../components";
import Divider from "../components/helpers/dividing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Wrapper from "../components/helpers/wrapper";
import Footer from "../components/footer";
import { useTranslation } from "react-i18next";
import { text } from "@fortawesome/fontawesome-svg-core";

function Collections() {
  const { t } = useTranslation();

  return (
    <>
      <div className="collectionContainer wrapper">
        <Header />
        <Divider />
        <h1 className="collectionHeader">{t("Collection_Head")}</h1>
        <p className="collectionText">{t("Collection_Desc")}</p>
        <h1 className="collectionHeader">{t("Collection_Head_2")}</h1>
        <p className="collectionText">
          <li>Goat Simulator</li>
          <li>High Of Life</li>
          <li>I am a bread</li>
          <li>Portal 2</li>
          <li>BuzzPunk</li>
        </p>
        <h1 className="collectionHeader">Saints Row: The Third</h1>
        <p className="collectionText">{t("Collection_Desc_2")}</p>
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
              <span className="spanInfo">{t( "FROM")}</span>
            </div>
          </div>
        </div>
        <h1 className="collectionHeader">Goat Simulator</h1>
        <p className="collectionText">{t("Collection_Desc_3")}</p>
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
              <span className="spanInfo">{t( "FROM")}</span>
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
        <p className="collectionText">{t("Collection_Desc_4")}</p>
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
              <span className="spanInfo">{t( "FROM")}</span>
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
        <p className="collectionText">{t("Collection_Desc_5")}</p>
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
              <span className="spanInfo">{t( "FROM")}</span>
            </div>
          </div>
        </div>
        <h1 className="collectionHeader">JazzPunk</h1>
        <p className="collectionText">{t("Collection_Desc_6")}</p>
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
              <span className="spanInfo">{t( "FROM")}</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Collections;
