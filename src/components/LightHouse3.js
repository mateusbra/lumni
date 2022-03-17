import React from "react";
import Lighthouse3 from "../assets/parte-3.png";
import styles from "../styles/styles";

function LightHouse3(){
    return(
    <div style={{width:"100%",height:768,backgroundColor:"#02182f"}}>
        <div style={{...styles.lightHouseContainer,backgroundImage:`url(${Lighthouse3})`,backgroundSize:"cover"}}>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <div style={{marginTop:100,maxWidth:1040}}>
                    <div style={{color:"white",textAlign:"center",fontSize:30,fontFamily:"FFGoodPro-Regular"}}>Beleza, mas o que são esses investimentos no digital e como saber onde minha empresa se encaixa?
                    Conheça nossos serviços abaixo, ou se preferir, entre em contato conosco para marcarmos uma reunião!</div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default LightHouse3;