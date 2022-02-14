import React from "react";
import Lighthouse from "../assets/capa-site.png";
import styles from "../styles/styles";

function FirstPage(){
    return(
        <div id="Home" style={{display:"block",height:768,width:"100%",backgroundColor:"#000f40",backgroundImage:`url(${Lighthouse})`,backgroundSize:"cover"}}>
        <div style={{marginLeft:100}}>
            <div style={{display:"flex",flexDirection:"column"}}>
              <div style={{marginTop:200,width:500}}>
                <div style={{color:styles.colors.orange,fontWeight:"bolder",fontSize:70}}>CRIATIVIDADE TRANSFORMA SUA EMPRESA</div>
                <button style={{...styles.homeButton,marginTop:80}}>VAMOS COMEÇAR</button>
              </div>
            </div>
              
        </div>
    </div>
    );
}

export default FirstPage;