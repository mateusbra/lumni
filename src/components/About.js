import React from "react";
import { useNavigate } from "react-router-dom";
import Sobre from "../assets/sobre.png";
import styles from "../styles/styles";


function About(){

    let navigate = useNavigate();
    const changeToContact = () =>{ 
        let path = `contato`; 
        navigate(path);
    }

    return(
      <div style={{width:"100%",height:768,backgroundColor:"#000f40"}}>
        <div style={{...styles.aboutContainer,backgroundImage:`url(${Sobre})`}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginLeft:340}}>
              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end"}}>
                <div style={{marginTop:100,maxWidth:700}}>
                  <div style={{color:"#07091d",fontWeight:"bolder",fontSize:70,fontFamily:"FFGoodPro-Bold"}}>Sobre a Lumni</div>
                  <div style={{marginTop:45,color:"#000f40",fontSize:30,fontFamily:"FFGoodPro-Regular"}}>A Lumni é um studio gaúcho de design gráfico que busca guiar empresas para o sucesso. Contamos com profissionais de diferentes áreas para atender a sua necessidade e oferecer um serviço único de qualidade.</div>
                  <button className="click" onClick={changeToContact} style={{...styles.homeButton,display:"flex",marginTop:"100px"}}>ENTRE EM CONTATO</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
    );
}

export default About;