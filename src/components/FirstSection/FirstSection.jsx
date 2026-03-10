import React from 'react'
import "./FirstSection.css";
import HeroText from '../HeroText/HeroText';
 
const FirstSection = ({title, image}) => {
  return (
    <div className="hero_mid">
    <img src={image} alt="" />
    <HeroText title={title} />
    </div>
  )
}

export default FirstSection