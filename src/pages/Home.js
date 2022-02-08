import React from "react";
import styles from "../styles/styles";
import Category from "../components/Category";
import texts from "../texts/texts";
import Divider from "../components/Divider";

function Home() {
  return (
    <>
        <div style={styles.containerNavBar}>
            <div style={{marginLeft:"20%"}}>
                <a href="#Home" style={styles.linkNavBar}>Home</a>
                <a href="#Text" style={styles.linkNavBar}>Text</a>
                <a href="#Text" style={styles.linkNavBar}>Text</a>
                <a href="#Text" style={styles.linkNavBar}>Text</a>
            </div>
        </div>
        <Category title={texts.title.identidadeVisual} subtitle={texts.subtitle.identidadeVisual} content={texts.content.identidadeVisual} textSide={"left"}/>
        <Divider />
        <Category title={texts.title.identidadeVisual} subtitle={texts.subtitle.identidadeVisual} content={texts.content.identidadeVisual} textSide={"right"}/>
        <Divider />
        <Category title={texts.title.identidadeVisual} subtitle={texts.subtitle.identidadeVisual} content={texts.content.identidadeVisual} textSide={"left"}/>
        <Divider />
    </>
  );
}

export default Home;