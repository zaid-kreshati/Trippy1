import React from "react";
import FirstSection from "../components/firstSection/firstSection";
import Trips from "../components/Trips/Trips";
import Container from "../components/layout/Container";

const Service = () => {
  return (
    <>
      <FirstSection image="/assets/img//service.jpg" title="Service" />
      <Container>
        <Trips />
      </Container>
    </>
  );
};

export default Service;
