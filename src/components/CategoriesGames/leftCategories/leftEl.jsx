import React from "react";
import { ButtonHeader } from "../../buttons";

function LeftEl({ image, title, price }) {
  return (
    <div className="leftEl">
      <img src={image} alt="" />
      <div className="leftEl__info">
        <h3>{title}</h3>
        <p>{price}</p>
        <ButtonHeader />
      </div>
    </div>
  );
}

export default LeftEl;
