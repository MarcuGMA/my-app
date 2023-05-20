import React from "react";
import MenuCategories from "./menuCategories";
import LeftEl from "./leftEl";

function LeftCategories({ selectedCategory,  handleCategorySelect }) {
  return (
    <div className="leftCategories">
      <h1>CATEGORIES</h1>
      <MenuCategories
        selectedCategory={selectedCategory}
        handleCategorySelect={handleCategorySelect}
      />
      <h1>RECOMENDED GAMES</h1>
      <LeftEl
        image="https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1628005200"
        title="The Ascent"
        price="€29.99"
      />
      <LeftEl
        image="https://th.bing.com/th/id/OIP.NSFHp20GDj3ZKOPHKhangAHaEK?pid=ImgDet&rs=1"
        title="Overwatch 2"
        price="Free"
      />
    </div>
  );
}

export default LeftCategories;
