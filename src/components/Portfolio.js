import React from "react";
import Lighthouse from "../assets/capa-site.png";
import Lighthouse2 from "../assets/parte-2.png"
import Lighthouse3 from "../assets/parte-3.png"
import styles from "../styles/styles";

function Portfolio(){
    return(
        <div id="Portfolio" style={{width:"100%",height:950,backgroundColor:"#000f40"}}>
            <div style={{width:1366,height:850,margin:"auto",backgroundColor:"red"}}>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <div style={{display:"flex",flex:1}}>
                        <img width={766} height={425} src={Lighthouse} alt={"Portfólio1"}></img>
                        <img width={600} height={425} src={Lighthouse2} alt={"Portfólio2"}></img>
                    </div>
                    <div style={{display:"flex",flex:1}}>
                        <img width={400} height={425} src={Lighthouse3} alt={"Portfólio3"}></img>
                        <img width={966} height={425} src={Lighthouse} alt={"Portfólio4"}></img>
                    </div>
                </div>
            </div>
                <button onClick={() => {window.open("https://www.behance.net/studiolumni", '_blank').focus()}} style={{...styles.homeButton,fontWeight:"bolder",padding:"5px 28px",backgroundColor:styles.colors.orange,borderStyle:"none",margin:"32px auto",display:"flex"}}>VER TODO O PORTFÓLIO</button>
        </div>
    );
}

export default Portfolio;