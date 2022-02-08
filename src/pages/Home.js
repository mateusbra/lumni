import React from "react";
import styles from "../styles/styles";

function Home() {
  return (
    <div style={{display:"flex",alignItems:"center",width:"100%",height:50,justifyContent:"center"}}>
        <div style={{marginLeft:"20%"}}>
        <a href="#" style={{marginLeft:20,marginRight:20}} >Home</a>
        <a href="#" style={{marginLeft:20,marginRight:20}} >News</a>
        <a href="#" style={{marginLeft:20,marginRight:20}} >Contact</a>
        <a href="#" style={{marginLeft:20,marginRight:20}} >About</a>
        </div>
    </div>
  );
}

export default Home;