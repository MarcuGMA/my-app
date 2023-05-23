import React, { useState } from "react";
import Header from "../components/Header";
// import colectionMenuItems123 from "../api/headerMenu";
import Divider from "../components/helpers/dividing";
import LeftCategories from "../components/CategoriesGames/leftCategories/leftCategories";
import RightCategories from "../components/CategoriesGames/rightCategories/rightCategories";
import Footer from "../components/footer";

function CategoriesGames() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="wrapper">
        <Header  />
        <Divider />
        <div className="categoriesGamesContainer">
          <LeftCategories
            selectedCategory={selectedCategory}
            handleCategorySelect={handleCategorySelect}
          />
          <RightCategories 
            selectedCategory={selectedCategory}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CategoriesGames;
