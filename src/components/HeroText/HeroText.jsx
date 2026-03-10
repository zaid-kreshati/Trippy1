import React from "react";
import "./HeroText.css";
const HeroText = ({title, subtitle, btn }) => {
  return (
    <div className="heroText">
      {title && <h1>{title}</h1>}
      {subtitle && <p>{subtitle}</p>}
      {btn && <button>{btn}</button>}
    </div>
  );
};

export default HeroText;
