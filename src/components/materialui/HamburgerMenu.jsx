import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu } from "@mui/material";
import { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';

function HamburgerMenu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }
  };

  return (
    <div className="hamburgerContainer">
      <MenuIcon sx={{ color: "white" }} onClick={toggleMenu} />
      <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="hamburger-menuHeader">
          <h1>Menu</h1>
          <ClearIcon sx={{ color: "white" }} onClick={toggleMenu} />
        </div>
      </div>
    </div>
  );
}

export default HamburgerMenu;
