import { useTranslation } from "react-i18next";


export function MenuCategories() {
    const { t } = useTranslation();
    return [
      t("ALL"),  
      t("TOP_SELLERS"),
      t("TOP_DEALS"),
      t("NEW_RELEASE"),
      t("FREE_TO_PLAY")
    ];
  }
  
  export function mapMenuCategories(callback) {
    return MenuCategories().map(callback);
  }