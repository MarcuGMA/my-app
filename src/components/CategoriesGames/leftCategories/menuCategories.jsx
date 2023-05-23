import React from "react";
import { mapMenuCategories } from "./../../../api/menuCategories";

function MenuCategories({ selectedCategory, handleCategorySelect }) {
  return (
    <div className="menuCategories">
      <ul>
        {mapMenuCategories((category) => (
          <li
            key={category}
            className={selectedCategory === category ? "selected" : ""}
            onClick={() => handleCategorySelect(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuCategories;
