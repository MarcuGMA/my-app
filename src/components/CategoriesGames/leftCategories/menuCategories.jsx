import React from "react";

const categoryList = [
  "ALL",
  "TOP SELLERS",
  "TOP DEALS",
  "NEW RELEASES",
  "FREE TO PLAY",
]

function MenuCategories({ selectedCategory, handleCategorySelect }) {

  return (
    <div className="menuCategories">
      <ul>
          {categoryList.map((category) => (
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
