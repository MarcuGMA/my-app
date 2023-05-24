import React,{useRef,useState} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';

function SearchMobile() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const searchInputRef = useRef(null)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      toggleMenu();
    }
  };

  return (
    <div className="searchMobileContainer">
     <SearchIcon sx={{color: "white"}} onClick={toggleMenu}/>
      <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="hamburger-menuHeader">
          <input className="searchMobileInput" type="text"
           onKeyDown={handleKeyPress}
           ref={searchInputRef}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchMobile;
