import React from "react";
import Lighthouse2 from "../assets/parte-2.png";
import styles from "../styles/styles";

function LightHouse2(){
    return(
      <div style={{width:"100%",height:768,backgroundColor:"#061d34"}}>
        <div style={{...styles.lightHouseContainer,backgroundImage:`url(${Lighthouse2})`,backgroundSize:"cover"}}>
          <div style={{marginRight:100}}>
              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end"}}>
                <div style={{marginTop:100,maxWidth:740}}>
                  <div style={{color:styles.colors.orange,fontWeight:900,fontSize:70,fontFamily:"FFGoodPro-Bold"}}>Digitalize seu negócio</div>
                  <div style={{color:"white",fontWeight:"bolder",fontSize:43,fontFamily:"FFGoodPro-Medium"}}>e veja os resultados acontecerem</div>
                  <div style={{marginTop:45,color:"white",fontSize:30,fontFamily:"FFGoodPro-Regular"}}>O meio digital cresce a cada dia, sendo imprescindível a presença das empresas nesse universo. Negócios de sucesso investiram no digital e se tornaram grandes nomes no mercado.</div>
                </div>
              </div>
          </div>
      </div>
    </div>
    );
}

export default LightHouse2;