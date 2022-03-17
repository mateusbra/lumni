import React, { useEffect } from "react";
//import styles from "../styles/styles";
//import Category from "../components/Category";
//import texts from "../texts/texts";
import Navbar from "../components/NavBar";
import LightHouse from "../components/LightHouse";
import LightHouse2 from "../components/LightHouse2";
import LightHouse3 from "../components/LightHouse3";
import Services from "../components/Services";
import SocialMedia from "../components/SocialMedia";
import Influencer from "../components/Influencer";
import Custom from "../components/Custom";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Instagram from "../components/Instagram";
import Footer from "../components/Footer";

function Home() {
  useEffect(()=>{
    console.log(window.innerWidth);
  },[])
  return (
    <>
      <Navbar />
      <LightHouse />
      <LightHouse2 />
      <LightHouse3 />
      <Services />
      <SocialMedia />
      <Influencer />
      <Custom />
      <Portfolio />
      <About />
      <Footer />
    </>
  );
}

export default Home;