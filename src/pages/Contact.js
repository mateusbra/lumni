import React from "react";
import Navbar from "../components/NavBar";
import FooterContact from "../components/FooterContact";
import LightHouseContact from "../components/LightHouseContact";
import AboutContact from "../components/AboutContact";
import LightHouse2 from "../components/LightHouse2";
import LightHouse3 from "../components/LightHouse3";

function Contact() {
  return (
    <>
      <Navbar />
      <LightHouseContact />
      <LightHouse2 />
      <LightHouse3 />
      <AboutContact />
      <FooterContact />
    </>
  );
}

export default Contact;