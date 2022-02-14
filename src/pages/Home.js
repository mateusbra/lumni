import React from "react";
//import styles from "../styles/styles";
//import Category from "../components/Category";
//import texts from "../texts/texts";
import Navbar from "../components/NavBar";
import FirstPage from "../components/FirstPage";
import SecondPage from "../components/SecondPage";
import ThirdPage from "../components/ThirdPage";
import FourthPage from "../components/FourthPage";
import FifthPage from "../components/FifthPage";
import SixthPage from "../components/SixthPage";
import SeventhPage from "../components/SeventhPage";

function Home() {
  return (
    <>
      <Navbar />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
      <SeventhPage />
    </>
  );
}

export default Home;