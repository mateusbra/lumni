import React from "react";
//import styles from "../styles/styles";
//import Category from "../components/Category";
//import texts from "../texts/texts";
import Navbar from "../components/NavBar";
import FirstPage from "../components/FirstPage";
import SecondPage from "../components/SecondPage";

function Home() {
  return (
    <>
        <Navbar />
        <FirstPage />
        <SecondPage />
    </>
  );
}

export default Home;