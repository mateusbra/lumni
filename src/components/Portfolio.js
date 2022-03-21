import React from "react";
import styles from "../styles/styles";
import Capa from "../../src/assets/capa-portfolio.png";

function Portfolio(){
    return(
        <div id="Portfolio" style={{width:"100%",height:850,backgroundColor:"#000f40"}}>
            <div style={{width:"100%",margin:"auto"}}>
                <img alt={"Portfolio"} style={{width:"100%",height:750,margin:"auto"}} src={Capa}/>
            </div>
                <button className="click" onClick={() => {window.open("https://www.behance.net/studiolumni", '_blank').focus()}} style={{...styles.homeButton,fontWeight:"bolder",padding:"5px 28px",backgroundColor:styles.colors.orange,borderStyle:"none",margin:"30px auto 0px",display:"flex"}}>VER TODO O PORTFÓLIO</button>
        </div>
    );
}

export default Portfolio;