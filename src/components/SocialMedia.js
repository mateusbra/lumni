import React from "react";
import socialMedia from "../assets/socialmedia.png";
import styles from "../styles/styles";
import { useNavigate } from "react-router-dom";

function SocialMedia(){

    let navigate = useNavigate();
    const changeToContact = () =>{ 
        let path = `contato`; 
        navigate(path);
    }

    return(
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",backgroundColor:styles.colors.orange}}>
            <div style={{display:"inline-flex",width:1366,height:728}}>
                <img src={socialMedia} alt={"Social Media"} style={{height:728,width:728,float:"left"}} />
            <div style={{marginTop:100,marginRight:70}}>
                <div style={{color:"#07091d",fontWeight:"bolder",fontSize:70,fontFamily:"FFGoodPro-Bold"}}>Social Media</div>
                <div style={{marginTop:45,color:"white",fontSize:30,maxWidth:520,fontFamily:"FFGoodPro-Regular",}}>As redes sociais são a forma mais direta de interação com os clientes. Uma empresa que se comunica bem transmite uma imagem melhor, além de alcançar um público maior.</div>
                <button onClick={changeToContact} style={{...styles.homeButton,marginTop:30}}>FAÇA SEU ORÇAMENTO</button>
              </div>
            </div>
    </div>
    );
}

export default SocialMedia;