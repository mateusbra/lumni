import React from "react";
import personalizados from "../assets/personalizados.png";
import styles from "../styles/styles";

function Custom(){
    return(
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",backgroundColor:"#f56944"}}>
            <div style={{display:"inline-flex",width:1366,height:728}}>
                <img src={personalizados} alt={"Personalizados"} style={{height:728,width:728,float:"left"}} />
            <div style={{marginTop:100,marginRight:70}}>
                <div style={{color:"#07091d",fontWeight:"bolder",fontSize:70,fontFamily:"FFGoodPro-Bold"}}>Personalizados</div>
                <div style={{marginTop:45,color:"white",fontSize:30,maxWidth:520,fontFamily:"FFGoodPro-Regular"}}>Já possui um projeto em andamento ou deseja criar algo totalmente novo? Conte-nos um pouco mais! Estamos aqui para tornar seus objetivos em realidade.</div>
                <button style={{...styles.homeButton,marginTop:30}}>FAÇA SEU ORÇAMENTO</button>
              </div>
            </div>
    </div>
    );
}

export default Custom;