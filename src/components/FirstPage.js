import React from "react";
import Lighthouse from "../assets/capa-site.png";
import styles from "../styles/styles";

function FirstPage(){
    return(
        <div style={{display:"block",height:768,width:"100%",backgroundColor:"#000f40",backgroundImage:`url(${Lighthouse})`,backgroundSize:"cover"}}>
        <div style={{marginLeft:100}}>
            <div style={{display:"flex",flexDirection:"column"}}>
              <div style={{marginTop:200,width:500}}>
                <div style={{color:styles.colors.orange,fontWeight:"bolder",fontSize:70}}>CRIATIVIDADE TRANSFORMA SUA EMPRESA</div>
                <button style={{marginTop:80,backgroundColor:styles.colors.beige,cursor:"pointer",borderRadius:30,borderColor:styles.colors.beige,borderStyle:"none",fontSize:25,color:"#07091d",padding:"9px 28px"}}>VAMOS COMEÇAR</button>
              </div>
            </div>
              
        </div>
    </div>
    );
}

export default FirstPage;