import React, { useEffect, useState } from "react";
import SuccessAlert from "./materialui/succes";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { mapColectionMenuItems123 } from "./../api/headerMenu";
import HamburgerMenu from "./materialui/HamburgerMenu";

function Header({ onItemClick }) {
  const [scroll, setScroll] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [success, setSuccess] = useState(false);
  const { t, i18n } = useTranslation();

  //Scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //Login verify token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      // setSuccess(true);
    }
  }, []);

  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const headerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "60px",
    backgroundColor: scroll ? "rgb(5, 12, 19, 0.8)" : "transparent",
    transition: "background-color 0.3s ease",
  };

  return (
    <header style={headerStyle}>
      {success && <SuccessAlert message="Login successful" />}
      <div className="containerHeader wrapper">
        <div className="logo">
          <a href="index.html">
            <Link to="/">
              {" "}
              <img src="/media/Logo/LOGO_GAMES.png" alt="" srcSet="" />
            </Link>
          </a>
        </div>
        <div className="searchBarHeader">
          <img
            className="searchBarHeader_icon"
            src="/media/icons/search-interface-symbol.png"
            alt=""
          />
          <input
            className="searchBarHeader_input"
            type="text"
            placeholder={t("SEARCH")}
          />
        </div>
        <div className="categoriesHeader">
          <p>{t("Collection")}</p>
          <div className="colectionList wrapper">
            <div className="colectionMenu">
              <h1>{t("MENU")}</h1>
              <div className="colectionMenuList">
                <ul>
                  {mapColectionMenuItems123((item) => (
                    <li key={item} onClick={onItemClick}>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/collections">
                  <p>{t("COLLECTIONS")}</p>
                </Link>
                <Link to="/about-us">
                  <p>{t("ABOUT_US")}</p>
                </Link>
              </div>
            </div>
            <div className="colectionSuggestion">
              <h1>{t("SUGGESTION")}</h1>
              <div className="colectionSuggestionElements">
                <div className="SuggestionElement">
                  <div className="sugestionElementImage">
                    <img
                      src="https://th.bing.com/th/id/R.07a74b60c5327632f5959720e014a8a1?rik=Z9yr3%2bEIYMWw%2bQ&riu=http%3a%2f%2fwww.100hdwallpapers.com%2fwallpapers%2f3840x2160%2fspider_man_2018_game_4k-hd_wallpapers.jpg&ehk=fEanmJGS5lVZlABqJLrM4xI4wOmFEcM3EjvI8JjHy9A%3d&risl=&pid=ImgRaw&r=0"
                      alt=""
                    />
                  </div>
                  <div className="sugestionElementText">
                    <div className="elementTextIcons">
                      <svg
                        width="1.5rem"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" />
                      </svg>
                      <svg
                        width="1.5rem"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                      >
                        <path d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z" />
                      </svg>
                    </div>
                    <div className="elementTextPrice">
                      <p> €80.7</p>
                      <span className="textFrom">{t("FROM")}</span>
                    </div>
                  </div>
                </div>
                <div className="SuggestionElement">
                  <div className="sugestionElementImage">
                    <img
                      src="https://th.bing.com/th/id/R.07a74b60c5327632f5959720e014a8a1?rik=Z9yr3%2bEIYMWw%2bQ&riu=http%3a%2f%2fwww.100hdwallpapers.com%2fwallpapers%2f3840x2160%2fspider_man_2018_game_4k-hd_wallpapers.jpg&ehk=fEanmJGS5lVZlABqJLrM4xI4wOmFEcM3EjvI8JjHy9A%3d&risl=&pid=ImgRaw&r=0"
                      alt=""
                    />
                  </div>
                  <div className="sugestionElementText">
                    <div className="elementTextIcons">
                      <svg
                        width="1.5rem"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" />
                      </svg>
                      <svg
                        width="1.5rem"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                      >
                        <path d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z" />
                      </svg>
                    </div>
                    <div className="elementTextPrice">
                      <p> €80.7</p>
                      <span className="textFrom">{t("FROM")}</span>
                    </div>
                  </div>
                </div>
                <div className="SuggestionElement">
                  <div className="sugestionElementImage">
                    <img
                      src="https://th.bing.com/th/id/R.07a74b60c5327632f5959720e014a8a1?rik=Z9yr3%2bEIYMWw%2bQ&riu=http%3a%2f%2fwww.100hdwallpapers.com%2fwallpapers%2f3840x2160%2fspider_man_2018_game_4k-hd_wallpapers.jpg&ehk=fEanmJGS5lVZlABqJLrM4xI4wOmFEcM3EjvI8JjHy9A%3d&risl=&pid=ImgRaw&r=0"
                      alt=""
                    />
                  </div>
                  <div className="sugestionElementText">
                    <div className="elementTextIcons">
                      <svg
                        width="1.5rem"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" />
                      </svg>
                      <svg
                        width="1.5rem"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                      >
                        <path d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z" />
                      </svg>
                    </div>
                    <div className="elementTextPrice">
                      <p> €80.7</p>
                      <span className="textFrom">{t("FROM")}</span>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/categories">
                <button className="suggestionElements-button">{t("SEE_ALL")}</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="loginHeader">
          {isLoggedIn ? (
            <div className="logout">
              {/* <Link className="loginHeaderLink" to="/login"> */}
              <p>{t("PROFILE")}</p>
              {/* </Link> */}
              <button className="logoutButton" onClick={handleLogout}>
                {t("LOGOUT")}
              </button>
            </div>
          ) : (
            <Link className="loginHeaderLink" to="/login">
              <p>{t("LOGIN_REGISTER")}</p>
            </Link>
          )}
        </div>
        <div className="translate">
          <select className="customSelect" onChange={changeLanguageHandler}>
            <option value="en">English</option>
            <option value="ro">Română</option>
          </select>
        </div>
        <HamburgerMenu />
      </div>
    </header>
  );
}

export default Header;
