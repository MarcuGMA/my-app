import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu } from "@mui/material";
import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { mapColectionMenuItems123 } from "../../api/headerMenu";


function HamburgerMenu(onItemClick) {
  const { t } = useTranslation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <div className="hamburgerContainer">
      <MenuIcon sx={{ color: "white" }} onClick={toggleMenu} />
      <div className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="hamburger-menuHeader">
          <Link to="/" onClick={toggleMenu}>
            {" "}
            <img src="/media/Logo/LOGO_GAMES.png" alt="" srcSet="" />
          </Link>
          <ClearIcon sx={{ color: "white" }} onClick={toggleMenu} />
        </div>
        <div className="registerMobileContainer">
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
            <Link className="loginHeaderLink" to="/login" onClick={toggleMenu}>
              <p>{t("LOGIN_REGISTER")}</p>
            </Link>
          )}
        </div>
        <div className="colectionMobileList">
          <h1>COLLECTIONS</h1>
          <ul>
            {mapColectionMenuItems123((item) => (
              <li key={item} onClick={onItemClick}>
                {item}
              </li>
            ))}
          </ul>
          <Link to="/collections" onClick={toggleMenu}>
            <p>{t("COLLECTIONS")}</p>
          </Link>
          <Link to="/about-us" onClick={toggleMenu}>
            <p>{t("ABOUT_US")}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HamburgerMenu;
