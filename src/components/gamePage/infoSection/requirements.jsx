import React from "react";
import { useTranslation } from "react-i18next";

function Requirements() {
  const { t } = useTranslation();

  return (
    <div className="requirements">
      <h1>REQUIREMENTS</h1>
      <div className="requirements__content">
        <div className="requirements__content__left">
          <h2>{t("Minimum")}</h2>
          <ul>
            <li>
              OS: Windows 7 SP1 64-bit or Windows 8.1 64-bit or Windows 10
              64-bit
            </li>
            <li>{t("Processor")}: Intel Core i5 or equivalent</li>
            <li>Memory: 4 GB RAM</li>
            <li>
            {t("Graphics")}: NVIDIA® GeForce® GTX 550 or ATI™ Radeon™ HD 6XXX or
              higher
            </li>
            <li>DirectX: Version 11</li>
            <li>{t("Network")}: Broadband Internet connection</li>
            <li>{t("Storage")}: 30 GB available space</li>
            <li>Sound Card: DirectX compatible sound card</li>
          </ul>
        </div>
        <div className="requirements__content__right">
          <h2>{t("Recommended")}</h2>
          <ul>
            <li>
              OS: Windows 7 SP1 64-bit or Windows 8.1 64-bit or Windows 10
              64-bit
            </li>
            <li>{t("Processor")} Intel Core i5 or equivalent</li>
            <li>{t("Memory")}: 4 GB RAM</li>
            <li>
              {t("Graphics")}: NVIDIA® GeForce® GTX 550 or ATI™ Radeon™ HD 6XXX or
              higher
            </li>
            <li>DirectX: Version 11</li>
            <li>{t("Network")}: Broadband Internet connection</li>
            <li>{t("Storage")}: 30 GB available space</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Requirements;
