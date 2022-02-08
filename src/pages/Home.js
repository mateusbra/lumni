import React from "react";
import styles from "../styles/styles";

function Home() {
  return (
    <>
        <div style={styles.containerNavBar}>
            <div style={{marginLeft:"20%"}}>
                <a href="#" style={styles.linkNavBar} >Home</a>
                <a href="#" style={styles.linkNavBar} >News</a>
                <a href="#" style={styles.linkNavBar} >Contact</a>
                <a href="#" style={styles.linkNavBar} >About</a>
            </div>
        </div>
    </>
  );
}

export default Home;