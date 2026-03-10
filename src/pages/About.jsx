import React from "react";
import FirstSection from "../components/firstSection/firstSection";
import Container from "../components/layout/Container";
import AboutText from "../components/AboutText/AboutText";
const aboutall = [
  {
    title: "Our History",
    description:
      "Trippy, short for trippy art or trippy graphics, emerged as a popular artistic movement and aesthetic in the late 1960s and early 1970s, largely influenced by the counterculture movements and the rise of psychedelic substances such as LSD. It is characterized by vibrant and surreal visuals with a unique blend of colors, patterns, and distorted perspectives. The roots of the trippy art movement can be traced back to the art and music scenes of the 1960s, particularly in San Francisco and London. Artists, musicians, and designers sought to express their experiences with psychedelic substances and altered states of consciousness through their creative works. These artworks often featured mind-bending patterns, swirling colors, and intricate designs that aimed to simulate hallucinatory experiences.",
  },
  {
    title: "Our Mission",
    description:
      "Our simple mission is to provide unforgettable and stress-free travel experiences for every customer.",
  },
  {
    title: "Our Vision",
    description:
      "Our vision at Trippy Travel Company is to make travel a seamless, exciting, and enriching experience for all our customers. We strive to be the preferred choice in the industry by offering personalized and unforgettable travel solutions.",
  },
];
const About = () => {
  return (
    <>
      <FirstSection image="/assets/img//about.jpg" title="about us" />
      <Container>
        {aboutall.map((item, index) => (
          <AboutText
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </Container>
    </>
  );
};

export default About;
