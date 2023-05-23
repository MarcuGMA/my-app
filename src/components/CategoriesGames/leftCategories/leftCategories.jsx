import React from "react";
import MenuCategories from "./menuCategories";
import LeftEl from "./leftEl";
import { useTranslation } from "react-i18next";

function LeftCategories({ selectedCategory,  handleCategorySelect }) {
  const { t } = useTranslation();
  
  return (
    <div className="leftCategories">
      <h1>{t("CATEGORIES")}</h1>
      <MenuCategories
        selectedCategory={selectedCategory}
        handleCategorySelect={handleCategorySelect}
      />
      <h1>{t("RECOMENDED_GAMES")}</h1>
      <LeftEl
        image="https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1628005200"
        title="The Ascent"
        price="€29.99"
      />
      <LeftEl
        image="https://th.bing.com/th/id/OIP.NSFHp20GDj3ZKOPHKhangAHaEK?pid=ImgDet&rs=1"
        title="Overwatch 2"
        price={t("FREE")}
      />
    </div>
  );
}

export default LeftCategories;
