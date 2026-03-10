import React from "react";
import FirstSection from "../components/firstSection/firstSection";
import Container from "../components/layout/Container";
import "../components/Contact/Contact.css";
const Contact = () => {
  return (
    <>
      <FirstSection image="/Trippy1/assets/img//contact.jpg" title="Contact US" />

      <Container>
        <div className="contact">
          <h1>Send A Message To Us!</h1>
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="email" />
            <input type="text" placeholder="subject" />
            <textarea type="text" placeholder="message" />
            <button> Send Message</button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Contact;
