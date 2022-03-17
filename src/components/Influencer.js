import React from "react";
import influencer from "../assets/influencer.png";
import styles from "../styles/styles";
import { useNavigate } from "react-router-dom";

function Influencer(){

    let navigate = useNavigate();
    const changeToContact = () =>{ 
        let path = `contato`; 
        navigate(path);
    }

    return(
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",backgroundColor:styles.colors.orange}}>
            <div style={{display:"inline-flex",width:1366,height:728}}>
            <div style={{marginTop:100,marginLeft:70}}>
                <div style={{color:"#07091d",fontWeight:"bolder",fontSize:70,fontFamily:"FFGoodPro-Bold"}}>Pacotes para Influenciadores</div>
                <div style={{marginTop:45,color:"white",fontSize:30,maxWidth:520,fontFamily:"FFGoodPro-Regular",}}>Você já é um criador de conteúdo ou deseja se tornar um? Esse serviço é feito para você! Conte com a Lumni para criar o universo visual do seu meio de comunicação e cativar o seu público.</div>
                <button onClick={changeToContact} style={{...styles.homeButton,marginTop:30}}>FAÇA SEU ORÇAMENTO</button>
            </div>
                <img src={influencer} alt={"Influencer"} style={{height:728,width:728,float:"right"}} />
            </div>
    </div>
    );
}

export default Influencer;