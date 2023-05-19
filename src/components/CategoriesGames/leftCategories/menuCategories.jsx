import React from "react";
import colectionMenuItems123 from "../../../api/headerMenu";
import { useState } from "react";

function MenuCategories({ selectedCategory, handleCategorySelect }) {
  const [selectedItem, setSelectedItem] = useState("TOP SELLERS");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="menuCategories">
      <ul>
        <li
          className={selectedItem === "TOP SELLERS" ? "selected" : ""}
          onClick={() => handleItemClick("TOP SELLERS")}
        >
          TOP SELLERS
        </li>
        <li
          className={selectedItem === "TOP DEALS" ? "selected" : ""}
          onClick={() => handleItemClick("TOP DEALS")}
        >
          TOP DEALS
        </li>
        <li
          className={selectedItem === "NEW RELEASES" ? "selected" : ""}
          onClick={() => handleItemClick("NEW RELEASES")}
        >
          NEW RELEASES
        </li>
        <li
          className={selectedItem === "FREE TO PLAY" ? "selected" : ""}
          onClick={() => handleItemClick("FREE TO PLAY")}
        >
          FREE TO PLAY
        </li>
      </ul>
    </div>
  );
}

export default MenuCategories;
