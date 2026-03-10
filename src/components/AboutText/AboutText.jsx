import React from "react";
import "./AboutText.css";

const AboutText = ({ title, description }) => {
  return (
    <div className="about">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default AboutText;
