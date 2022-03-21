import React from "react";
import styles from "../styles/styles";
import Capa from "../../src/assets/capa-portfolio.png";

function Portfolio(){
    return(
        <div id="Portfolio" style={{width:"100%",height:950,backgroundColor:"#000f40"}}>
            <div id="Home" style={{...styles.lightHouseContainer,width:"100%",height:850,backgroundImage:`url(${Capa})`,backgroundSize:"cover"}}>
          <div style={{marginLeft:100}}>
              <div style={{display:"flex",flexDirection:"column"}}>
                <div style={{marginLeft:200,marginTop:300,width:500}}>
                  <div style={{color:styles.colors.orange,fontSize:50,fontFamily:"FFGoodPro-Bold"}}>CONHEÇA NOSSO</div>
                  <div style={{color:styles.colors.orange,fontSize:130,fontFamily:"FFGoodPro-Bold"}}>PORTFÓLIO</div>
                </div>
              </div> 
          </div>
          </div>
                <button onClick={() => {window.open("https://www.behance.net/studiolumni", '_blank').focus()}} style={{...styles.homeButton,fontWeight:"bolder",padding:"5px 28px",backgroundColor:styles.colors.orange,borderStyle:"none",margin:"32px auto 0px",display:"flex"}}>VER TODO O PORTFÓLIO</button>
        </div>
    );
}

export default Portfolio;