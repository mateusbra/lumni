import React from "react";
import Sobre from "../assets/sobre.png";
import styles from "../styles/styles";

function About(){
    return(
      <div style={{width:"100%",height:768,backgroundColor:"#000f40"}}>
        <div style={{...styles.aboutContainer,backgroundImage:`url(${Sobre})`}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginLeft:340}}>
              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end"}}>
                <div style={{marginTop:100,maxWidth:700}}>
                  <div style={{color:"#07091d",fontWeight:"bolder",fontSize:70,fontFamily:"FFGoodPro-Bold"}}>Sobre a Lumni</div>
                  <div style={{marginTop:45,color:"white",fontSize:30,fontFamily:"FFGoodPro-Regular"}}>A Lumni é um studio gaúcho de design gráfico que busca guiar empresas para o sucesso. Contamos com profissionais de diferentes áreas para atender a sua necessidade e oferecer um serviço único de qualidade.</div>
                  <button style={{...styles.homeButton,display:"flex",margin:"100px auto 0"}}>CONHEÇA NOSSOS SERVIÇOS</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
    );
}

export default About;