import React from "react";
import "./Hero.css";
import HeroText from "../HeroText/HeroText";

const Hero = ({ title, subtitle, btn, bgImage}) => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${bgImage})` }}>

      <HeroText title={title} subtitle={subtitle} btn={btn}/>

      
    </div>
  );
};

export default Hero;
