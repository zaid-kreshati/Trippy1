import React from "react";

import Hero from "../components/Hero/Hero";
import Destination from "../components/Destination/Destination";
import Container from "../components/layout/Container";
import Trips from "../components/Trips/Trips";
import Footer from "../components/Footer/Footer";
import { FaTwitterSquare } from "react-icons/fa";
import { ImBehance2 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { useState } from "react";

const Home = () => {


  const [mode, setMode] = useState(false);
  const changeMode = (m) => {
    setMode(m);
    console.log(m);
    console.log("first");
  };

  return (
    <div>
      <Hero
        bgImage="/assets/img/hero1.jpg"
        title="your journey your story"
        subtitle="choose your favourite destination"
        btn="Travel Plan"
      />
      <Container>
        <Destination />
      </Container>
      <Container>
        <Trips />
      </Container>
      
    </div>
  );
};

export default Home;
