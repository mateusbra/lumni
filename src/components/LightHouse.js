import React from "react";
import Lighthouse from "../assets/capa-site.png";
import styles from "../styles/styles";

function LightHouse(){
    return(
      <div style={{width:"100%",height:768,backgroundColor:"#00112c"}}>
        <div id="Home" style={{...styles.lightHouseContainer,backgroundImage:`url(${Lighthouse})`,backgroundSize:"cover"}}>
          <div style={{marginLeft:100}}>
              <div style={{display:"flex",flexDirection:"column"}}>
                <div style={{marginTop:200,width:500}}>
                  <div style={{color:styles.colors.orange,fontSize:70,fontFamily:"FFGoodPro-Bold"}}>CRIATIVIDADE TRANSFORMA SUA EMPRESA</div>
                </div>
              </div> 
          </div>
      </div>
    </div>
    );
}

export default LightHouse;