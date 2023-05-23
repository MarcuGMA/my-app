import { useTranslation } from "react-i18next";


function colectionMenuItems123() {
  const { t } = useTranslation();
  return [
    t("POPULAR_GAMES"),
    t("TOP_DEALS"),
    t("NEW_RELEASE"),
    t("FREE_TO_PLAY"),
    t("UNDER_10$")
  ];
}

export function mapColectionMenuItems123(callback) {
  return colectionMenuItems123().map(callback);
}